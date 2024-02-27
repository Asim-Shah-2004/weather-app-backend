import express from "express";
const PORT = 3000;
const app = express();
import errorHandler from './middlewares/errorHandler.js'
import RegisterRouter from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import corsOptions from "./config/corsOptions.js";
const CONNECTION_URL = process.env.CONNECTION_URL
   
mongoose.connect(CONNECTION_URL)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(`No connection to MongoDB\nError:\n${err}`));
app.use(cors(corsOptions))
app.use(express.json());
app.use('/register',RegisterRouter)
app.use("/login", loginRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${3000}`);
});
