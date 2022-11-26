const express = require("express");
const dotenv = require("dotenv");
const app = express();
//load env variables
dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
