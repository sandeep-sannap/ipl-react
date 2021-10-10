import React from "react";
import { Link } from "react-router-dom";

export default function MatchDetailCard({ teamName, match }) {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  const isMatchWon = teamName === match.winner;

  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link
            to={otherTeamRoute}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {otherTeam}
          </Link>
        </h1>
        <h2 className="match-date">{match.date.split("T")[0]}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h3 className="match-result">
          {match.winner} won by {match.result_margin} {match.result}{" "}
        </h3>
      </div>
      <div className="additional-detail">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the match</h3>
        <p>{match.player_of_match}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
}
