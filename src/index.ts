import express from "express";
import dotenv from "dotenv";
import { connectToRedis } from "./redis";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Coinnect to redis
connectToRedis();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);    
});

export default app;