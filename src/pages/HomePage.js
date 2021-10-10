import React from "react";
import Teams from "../components/Teams";

export default function HomePage() {
  const teams = [
    {
      name: "Mumbai Indians",
    },
    {
      name: "Chennai Super Kings",
    },
    {
      name: "Royal Challengers Bangalore",
    },
    {
      name: "Kings XI Punjab",
    },
    {
      name: "Delhi Daredevils",
    },
    {
      name: "Kolkata Knight Riders",
    },
    {
      name: "Rajasthan Royals",
    },
    {
      name: "Delhi Capitals",
    },
    {
      name: "Deccan Chargers",
    },
    {
      name: "Rising Pune Supergiant",
    },
    {
      name: "Gujarat Lions",
    },
  ];

  return (
    <section className="homePage">
      <div className="title">
        <h1 style={{ color: "white" }}>IPL DASHBOARD</h1>
      </div>

      <div className="home">
        {teams.map((team, index) => (
          <Teams key={index} teamName={team.name} />
        ))}
      </div>
    </section>
  );
}
