import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5100;
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";


//routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//public
import {dirname} from 'path';
import { fileURLToPath } from "url";
import path from "path";

//middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


const __dirname =dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname,'./client/dist')));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a home page");
});


app.use("/api/v1/jobs", authenticateUser,jobRouter);
app.use("/api/v1/users",authenticateUser,userRouter);
app.use("/api/v1/auth",authRouter);

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./client/dist','index.html'));
})

// //GET all jobs
// app.get('/api/v1/jobs',)

// //CREATE jobs
// app.post('/api/v1/jobs',)

// //GET single job
// app.get('/api/v1/jobs/:id',)

// //EDIT Job
// app.patch("/api/v1/jobs/:id",)

// //DELETE Job
// app.delete("/api/v1/jobs/:id",)
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
