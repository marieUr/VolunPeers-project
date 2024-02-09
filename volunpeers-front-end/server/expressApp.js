import express from 'express';
import { connectToDB, getDB } from './database.js';
import { ObjectId } from 'mongodb';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto, { verify } from 'crypto';
import verifyToken from './verifytoken.js';

/*

exApp.post("", (req, res) => {})

exApp.patch("", (req, res) => {})

exApp.put("", (req, res) => {})

exApp.delete("", (req, res) => {})

exApp.get("", (req, res) => {})

*/
const exApp = express();
const port = process.env.port || 3001;

// middleware

exApp.use(express.json());
exApp.use(bodyParser.json());
exApp.use(cors());
exApp.use(express.json())
// database connection
let db;
connectToDB((err) => {
  if (!err) {
    exApp.listen(port, () => {
      console.log(`app listening on http://localhost:${port}`);
    });
    db = getDB();
  }
});

// routes

// Login function that creates a JWT token.
exApp.post('/api/login', async (req, res) => {
  // form or post fields
  const { email, password } = req.body;

  // query database
  const usersCollection = db.collection('users');
  const user = await usersCollection.findOne({ email });

  // if user email is not found
  try {
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'invalid credentials' });
    }

    // compare the password with the hashed password in DB
    const passwordMatch = await bcrypt.compare(password, user.password);

    // if password matches, auth successful
    if (passwordMatch) {
      // generate JWT or session token

      const secretKey = 'secret';
      if (!process.env.JWT_SECRET_KEY) {
        process.env.JWT_SECRET_KEY = secretKey;
      }
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        secretKey,
        { expiresIn: '1h' }
      );

      // return success response with token or any other data
      console.log(`here is the secretkey: ${secretKey} & ${token}`);
      return res
        .status(200)
        .json({ sucess: true, message: 'login successful', token });
    } else {
      // if passwords don't match authentication failed
      return res
        .status(401)
        .json({ success: false, message: 'invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login', error);
    return res
      .status(500)
      .json({ success: false, message: 'internal server error' });
  }
});

// User creation call to the back-end
exApp.post('/api/signup', async (req, res) => {
  // form or post fields
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // uses 10 salt rounds

    // insert the user into the "users" collection
    const usersCollection = db.collection('users');
    await usersCollection.insertOne({ email, password: hashedPassword });

    // return success response
    return res
      .status(201)
      .json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    return res
      .status(500)
      .json({ success: false, message: 'internal server error' });
  }
});

// function for verifying the token to fetch data from the back-end.
exApp.get('/api/usercreds', verifyToken, async (req, res) => {
  try {
    const { userId } = req.decoded;
    const objectId = new ObjectId(userId);
    const user = await db.collection('users').findOne({ _id: objectId });

    console.log(req.decoded);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(userId)
    // return user data in response
    res.status(200).json(user);
  } catch (error) {
    console.error(`Error fetching user data: ${error}`);
    res.status(500).json({ error: 'Internal server error ' });
  }
});

exApp.patch('/api/usercreds', verifyToken, async (req, res) => {
    try {
      const { userId } = req.decoded;
      const objectId = new ObjectId(userId);
      const updatedField = req.body
      const updatedUser = await db.collection('users').updateOne({ _id: objectId }, {$set: updatedField });
  
      console.log(userId);
      if (!updatedField) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // return user data in response
      res.status(200).json(updatedField);
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
      res.status(500).json({ error: 'Internal server error ' });
    }
  });

  exApp.get("/api/companies/:id", async (req, res) => {

    try {
    const companyid = req.params.id;
    const objectId = new ObjectId(companyid);

    const company = await db.collection('companies').findOne({_id: objectId})

        if(!company && !companies) {
            res.status(404).json({ message: "Company not found"})
        }
    res.status(200).json(company)
    }catch (error) {
        console.error(`Error fetching companies: ${error}`)
        res.status(500).json({ error: 'Internal server error' })
    }
  })

  exApp.get("/api/companies/", async (req, res) => {

    try {

    const companies = await db.collection('companies').find({}).toArray();

        if(!companies) {
            res.status(404).json({ message: "Companies not found"})
        }
    res.status(200).json(companies)
    }catch (error) {
        console.error(`Error fetching companies: ${error}`)
        res.status(500).json({ error: 'Internal server error' })
    }
  })