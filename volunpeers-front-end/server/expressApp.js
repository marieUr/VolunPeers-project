import express from "express";
import {connectToDB, getDB} from "./database.js"
import { ObjectId } from "mongodb";
import cors from "cors"
import bodyParser from "body-parser"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import crypto from "crypto"

/*

exApp.post("", (req, res) => {})

exApp.patch("", (req, res) => {})

exApp.put("", (req, res) => {})

exApp.delete("", (req, res) => {})

exApp.get("", (req, res) => {})

*/
const exApp = express()
const port = process.env.port || 3001

// middleware
exApp.use(express.json())
exApp.use(bodyParser.json())

// database connection
exApp.use(cors())

let db;
connectToDB((err) => {
    if(!err) {
        exApp.listen(port,() => {
            console.log(`app listening on http://localhost:${port}`)
        })
        db = getDB()

    }
})

// routes


exApp.post("/api/login", async (req, res) => {
    
    // form or post fields
    const { email, password } = req.body;

    // query database
    const usersCollection = db.collection('users')
    const user = await usersCollection.findOne({ email })

    // if user email is not found
    try {
        if (!user) {
            return res.status(401).json({ success: false, message: 'invalid credentials'})
        }

        // compare the password with the hashed password in DB
        const passwordMatch = await bcrypt.compare(password, user.password)

        // if password matches, auth successful
        if (passwordMatch) {
            // generate JWT or session token 

            const secretKey = crypto.randomBytes(32).toString("hex")
            if (!process.env.JWT_SECRET_KEY) {
                process.env.JWT_SECRET_KEY = secretKey;
            }
            const token = jwt.sign({
                userId: user._id, 
                email: user.email
            }, secretKey, {expiresIn: '1h'});

            // return success response with token or any other data
            console.log(`here is the secretkey: ${secretKey} & ${token}`)
            return res.status(200).json({ sucess: true, message: 'login successful', token})
        } else {
            // if passwords don't match authentication failed
            return res.status(401).json({ success: false, message: 'invalid credentials'})
        }
    } catch(error) {
        console.error('Error during login', error);
        return res.status(500).json({ success: false, message: 'internal server error' })
    }
})

exApp.post("/api/signup", async (req, res) => {
    
    // form or post fields
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10) // uses 10 salt rounds

        // insert the user into the "users" collection
        const usersCollection = db.collection('users')
        await usersCollection.insertOne({ email, password: hashedPassword });

        // return success response
        return res.status(201).json({ success: true, message: "User created successfully"})
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: "internal server error"})
    }

})

exApp.get("/api/profile/:id", async (req, res) => {
    // path to id endpoint
    const userId = req.params.id;

    try {

        // convert the userID to objectID for MongoDB
        console.log('Fetching user profile for userId:', userId);
        const objectId = new ObjectId(userId)

        // Query the MongoDB database for the user profile using the user ID
        const user = await db.collection('users').findOne({ _id: objectId });

        // If user is not found, return 404 Not Found
        if (!user) {
            console.log('User not found for userId:', userId);
            return res.status(404).json({ message: 'User not found' });
    }

        // If user is found, return the user profile data
        console.log('User profile found for userId:', userId);
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

exApp.patch("/api/profile/:id", async (req, res) => {
    const userId = req.params.id;
    const updatedProfile = req.body;
    try {
        const objectId = new ObjectId(userId);

        // Update the user profile in the MongoDB database
        const result = await db.collection('users').updateOne({ _id: objectId }, { $set: updatedProfile });
    
        // Check if the profile was successfully updated
        if (result.modifiedCount === 1) {
          // Profile updated successfully
          res.status(200).json({ message: 'Profile updated successfully' });
        } else {
          // Profile not found or not updated
          res.status(404).json({ message: 'Profile not found or not updated' });
        }
      } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
