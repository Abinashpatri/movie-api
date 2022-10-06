import express from "express";
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
// Movie Route
import movieRoute from './routes/movie.js'


dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(console.log("MongoDB Connected")).catch(err => console.log(err))  //DB Connection

app.use(cors())
app.use(express.json()) 
app.use("/api", movieRoute)
app.get("/", (req, res) => res.send("Welcome to Movie API"))

app.listen(process.env.PORT || 5000, () => console.log(`Backend Running`)) 

