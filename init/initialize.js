const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.model.js");
const connectDatabase = require("../db.js");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const initDB = async () => {
  await connectDatabase();
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "68dfcc06a23450d85a3bf25d",
  }));
  await Listing.insertMany(initdata.data);
  console.log("data was initialized successfully");
  mongoose.connection.close();
};

initDB().catch((err) => {
  console.error("Error initializing database:", err);
});
