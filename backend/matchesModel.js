const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = new Schema({
  id: Number,
  state: Number,
  date: Date,
  year: String,
  player_of_match: String,
  venue: String,
  team1: String,
  team2: String,
  toss_winner: String,
  toss_decision: String,
  winner: String,
  result: String,
  result_margin: String,
  method: String,
  umpire1: String,
  umpire2: String,
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
