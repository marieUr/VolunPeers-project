import { MongoClient } from "mongodb"

let dbConnection;

export function connectToDB(cb) {
    MongoClient.connect('mongodb+srv://Zaya:test123@techlabscluster1.ffjedxb.mongodb.net/volunteer-work')
        .then((client) => {
            dbConnection = client.db()
            return cb()
            
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
}

export function getDB() {
    return dbConnection
}
