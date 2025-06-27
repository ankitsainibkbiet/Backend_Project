import connectDB from "./db/connection.js"
import { app } from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("error in database :", err.message)
    })