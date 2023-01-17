import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes';
import router from "./routes/user-routes"
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

//Connecting to database

