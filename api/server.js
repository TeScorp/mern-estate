import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log("connected to MongoDB!");
    })
    
    .catch((err) =>{
        console.log(err)
})

const app = express();

// Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});

app.use('/api/user', userRouter)
