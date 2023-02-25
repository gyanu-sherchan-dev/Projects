import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, (error) => {
  error
    ? console.log("server could not run")
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
