import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
import jobRouter from "./routes/job.js"
import usersRouter from "./routes/user.js"
import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
//body parser to send in post request
app.use(morgan('dev'));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

// middleware error handling
// app.use(cookieParser())
app.use((err,req,res,next) => {
  const errStatus= err.status || 500
  const errMessage = err.message || "error from handler!"
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack
  })
})

app.use(cors())

app.use("/api/jobs", jobRouter) /// https://localhost:5000/api/jobs
app.use("/api/users", usersRouter) /// https://localhost:5000/api/users
// app.use("/api/user", userRouter) /// https://localhost:3000/api/user
// app.use("/api/rooms", roomRouter) /// https://localhost:3000/api/rooms


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true,useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
  console.log(`connection is established and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));