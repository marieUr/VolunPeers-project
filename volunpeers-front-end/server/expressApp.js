import express from "express";
import {connectToDB, getDB} from "./database.js"
import { ObjectId } from "mongodb";
import cors from "cors"


const exApp = express()
const port = process.env.port || 3001

// middleware
exApp.use(express.json())


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

exApp.use('/index', (req,res) => {
    res.send("hello traveler")
    console.log("this is the basic log")
})
exApp.get("/about", (req, res) => {
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

exApp.post("/about", (req, res) => {
    
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

exApp.delete("/about/:id", (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
    db.collection('companies')
    .deleteOne({_id: new ObjectId(req.params.id)})
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(500).json({ error: "could not delete the document"})
    })
    } else {
        res.status(500).json({error: "not a valid document id." })
    }
    
})

exApp.patch("", () => {
    
})