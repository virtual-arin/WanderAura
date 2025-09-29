const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./db.js");

dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  connectDatabase();
  console.log(`Server is listening to port ${port}`);
});
