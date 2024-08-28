import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/Cards.js";
import cors from "cors";
const app = express()

app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/v1", router)

if (process.env.NODE_ENV !== "production") {
    dotenv.config({ path: ".env" });
}


export default app