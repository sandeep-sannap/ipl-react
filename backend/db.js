require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.LOCAL_DB;
const database = process.env.DB_URL;

module.exports = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db connected");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};
