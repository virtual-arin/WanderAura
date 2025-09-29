const mongoose = require("mongoose");

const connectDatabase = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.error("An error occured while connecting to database ", error);
  }
};

module.exports = connectDatabase;
