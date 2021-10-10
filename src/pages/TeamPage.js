import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

export default function TeamPage(props) {
  const { teamName } = props.match.params;

  const [recentMatches, setRecentMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://ipl-dashboard-backen.herokuapp.com/api/match/${teamName}`
      );

      setRecentMatches(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="team">
        <h1 style={{ color: "white" }}>{teamName}</h1>

        <div className="match-detail-section">
          <h3>Latest Matches</h3>
          <MatchDetailCard teamName={teamName} match={recentMatches[0]} />
        </div>
        <div className="small-card">
          {recentMatches.slice(1).map((match) => (
            <MatchSmallCard key={match._id} teamName={teamName} match={match} />
          ))}
          <div className="more-link">
            <Link
              to={`/matches/${teamName}/2020`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              More{" >"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
