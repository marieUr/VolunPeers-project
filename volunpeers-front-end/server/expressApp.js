import express from "express";
import {connectToDB, getDB} from "./database.js"
import { ObjectId } from "mongodb";
import cors from "cors"
import bodyParser from "body-parser"
import bcrypt from "bcrypt"

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

exApp.use('/api/index', (req,res) => {
    res.send("hello traveler")
    console.log("this is the basic log")
})
exApp.get("/api/about", (req, res) => {
    let companies = []

    db.collection('companies')
        .find()
        .sort( { name: 1 })
        .forEach( company => companies.push(company))
        .then(() => {
            res.status(200).json(companies)
        })
        .catch((err) => {
            res.status(500).json({ error: "could not find documents"})
            
        })
        

})

exApp.post("/api/about", (req, res) => {
    
    const aboutMe = req.body

    db.collection('companies')
        .insertOne(aboutMe)
        .then(result => {
            res.status(201).json(result)
        })
        .catch( err => {
            res.status(500).json({err: "could not create a new document"})
        })
})

exApp.delete("/api/about/:id", (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
    db.collection('companies')
    .deleteOne({_id: new ObjectId(req.params.id)})
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(500).json({ error: "could not delete the document" })
    })
    } else {
        res.status(500).json({ error: "not a valid document id." })
    }
    
})


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
            // return success response with token or any other data
            return res.status(200).json({ sucess: true, message: 'login successful' })
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

})
