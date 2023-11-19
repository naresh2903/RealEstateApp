import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();


const app = express()


const password = encodeURIComponent(process.env.MONGODB_PASS);
const username = encodeURIComponent(process.env.MONGODB_USER);
const MONGODB_URI = `mongodb+srv://${username}:${password}@realestate.ddgcyd1.mongodb.net/real-estate?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });



app.listen(3001, () => {
  console.log("server is running fine at port 3001");
})