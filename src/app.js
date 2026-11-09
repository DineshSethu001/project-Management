import express from "express"
import cors from "cors"
const app = express()

// basic configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN ?.split('.') || "http://localhost:5173",
    credentials:true,
    allowedHeaders:["Authorization", "Content-Type"],
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"]
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

export default app           