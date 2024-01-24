import { MongoClient } from "mongodb"

let dbConnection;

export function connectToDB(cb) {
    MongoClient.connect('')
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
