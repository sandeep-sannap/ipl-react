const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const csv = require("csvtojson");
const mongoose = require("mongoose");

const Match = require("./matchesModel");

const dbConnection = require("./db");
mongoose.set("bufferCommands", false);

const db = process.env.LOCAL_DB;
const database = process.env.DB_URL;
dbConnection();

const csvFile = path.join(__dirname, "matches.csv");

const parse = async () => {
  const jsonArray = await csv().fromFile(csvFile);
  // const {
  //   id,
  //   date,
  //   city,
  //   venue,
  //   umpire1,
  //   umpire2,
  //   result,
  //   result_margin,
  //   method,

  //   team1,
  //   team2,
  //   toss_winner,
  //   toss_decision,
  //   winner,
  //   player_of_match,
  // } = jsonArray[0];

  // const year = date.split("-")[0];
  // console.log(year);

  jsonArray.map((match) => {
    const {
      id,
      date,
      city,
      venue,
      umpire1,
      umpire2,
      result,
      result_margin,
      method,

      team1,
      team2,
      toss_winner,
      toss_decision,
      winner,
      player_of_match,
    } = match;

    const newMatch = new Match({
      id,
      city,
      year: date.split("-")[0],
      venue,
      umpire1,
      umpire2,
      result,
      result_margin,
      method,
      date,
      team1,
      team2,
      toss_winner,
      toss_decision,
      winner,
      player_of_match,
    });

    newMatch
      .save()
      .then(() => console.log("saved"))
      .catch((err) => console.log(err));
  });
};

//parse();

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/matches"));

app.get("/", async (req, res) => {
  try {
    const matches = await Match.find().sort("-date");
    res.json(matches);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
