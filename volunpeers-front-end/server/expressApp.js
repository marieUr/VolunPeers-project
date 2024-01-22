import Express from "express";
import {connectToDB, getDB} from "./database.js"
import { ObjectId } from "mongodb";
import cors from "cors"


const exApp = Express()
const port = process.env.port || 9000

exApp.use((cors))
// database connection

let db;
connectToDB((err) => {
    if(!err) {
        exApp.listen(() => {
            console.log(`app listening on http://localhost:${port}`)
        })
        db = getDB()
    }
})

// routes

exApp.use("/", (req,res) => {
    console.log("this is the basic log")
})
exApp.get("/about", (req, res) => {
    let companies

    db.collection('companies')
        .find()
        .sort( { name: 1 })
        .forEach( company => companies.push(company))
        .then(() => {
            res.status(200).json(companies)
        })
        .catch(() => {
            res.status(500).json({ error: "could not find documents"})
        })

})