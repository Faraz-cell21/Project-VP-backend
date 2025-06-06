//All these imports are for dotenv to work in specific file or else its breaking the code
import cors from "cors"
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true              
}));

import dotenv from "dotenv";
dotenv.config({
    path: "../.env"
})

import connectDB from "./db/index.js";
import { app } from "./app.js"

import configureCloudinary from './utils/cloudinaryConfig.js';
configureCloudinary();

import { uploadOnCloudinary } from './utils/cloudinary.js';
import productRoutes from './routes/product.routes.js';


connectDB()
.then(() => {app.listen(process.env.PORT)})
.catch((error) => {console.log("Connection not opened properly at PORT 3000 due to: ", error)})