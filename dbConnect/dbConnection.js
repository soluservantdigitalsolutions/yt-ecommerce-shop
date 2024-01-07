const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database has been connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
