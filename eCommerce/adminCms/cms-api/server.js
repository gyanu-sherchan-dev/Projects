import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

import cors from "cors";
import morgan from "morgan";
app.use(express());
app.use(cors());
app.use(morgan("dev"));

//dbConnection
import { dbConnect } from "./dbConfig/dbConfig.js";
dbConnect();

//uncaught url

app.use("*", (req, res, next) => {
  try {
    res.json({
      status: 404,
      message: "page not found",
    });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  try {
    const errCode = error.errorCode || 500;
    console.log(errCode);
    res.statusCode(errCode).json({
      status: "error",
      message: "",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log("server could not run")
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
