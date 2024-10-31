import express from "express";
import dotenv from "dotenv";
import router from "./router/app.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use("/api/v1", router);



export default app;