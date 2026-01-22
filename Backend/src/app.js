import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT

app.get("/", (req,res)=>{
    res.send("Project Management System Api running")
})

app.use("/api/auth",authRoutes)

app.listen(PORT, (req,res)=>{
    console.log(`Server is working at PORT http://localhost:${PORT}`)
})

connectDB()