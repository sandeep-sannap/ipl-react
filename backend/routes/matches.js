const router = require("express").Router();
const Match = require("../matchesModel");

router.get("/match/:team/:year", async (req, res) => {
  try {
    const { team, year } = req.params;
    console.log(team, year);
    const matches = await Match.find({
      $or: [{ team1: team }, { team2: team }],
      year: year,
    }).sort("-date");
    res.json(matches);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
});

router.get("/match/:recentTeam", async (req, res) => {
  const { recentTeam } = req.params;
  try {
    const matches = await Match.find({
      $or: [{ team1: recentTeam }, { team2: recentTeam }],
    })
      .sort("-date")
      .limit(4);

    // const count = await Match.find({
    //   $or: [{ team1: recentTeam }, { team2: recentTeam }],
    // }).countDocuments();

    // const winCount = await Match.find({
    //   winner: recentTeam,
    // }).countDocuments();

    res.json(matches);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
