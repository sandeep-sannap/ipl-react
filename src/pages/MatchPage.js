import axios from "axios";
import MatchDetailCard from "../components/MatchDetailCard";
import React, { useState, useEffect } from "react";

export default function MatchPage(props) {
  const { teamName, year } = props.match.params;
  const [newYear, setNewYear] = useState(year);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://ipl-dashboard-backen.herokuapp.com/api/match/${teamName}/${newYear}`
      );
      // const { data } = await axios.get(
      //   `http://localhost:5000/api/match/${teamName}/${newYear}`
      // );

      setMatches(data);
    };
    fetchData();
  }, [newYear]);
  const handleChange = (e) => {
    setNewYear(e.target.value);
    // console.log(newYear);
    // const { data } = await axios.get(
    //   `http://localhost:5000/api/match/${teamName}/${newYear}`
    // );
    // console.log("onchange data", data);
    // setMatches(data);
  };
  return (
    <div className="MatchPage team">
      <div className="year-selector">
        <h3> Select Year </h3>
        <select onChange={handleChange} style={{ color: "white" }}>
          <option value="2020">2020</option>

          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
        </select>
        {/* <YearSelector teamName={teamName} /> */}
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {newYear}
        </h1>
        {matches.map((match) => (
          <div>
            <MatchDetailCard key={match.id} teamName={teamName} match={match} />
          </div>
        ))}
      </div>
    </div>

    // <div className="match-page">
    //   <div className="year-selector">
    //     <div>
    //       <h1 className="page-heading">
    //         {teamName} matches in {year}
    //       </h1>
    //     </div>
    //     <p>Select year</p>
    //     <select
    //     //   style={{color: "white"}}
    //     >
    //       <option value="2020">2020</option>
    //       <option value="2019">2019</option>
    //       <option value="2018">2018</option>
    //       <option value="2017">2017</option>
    //       <option value="2016">2016</option>
    //       <option value="2015">2015</option>
    //       <option value="2014">2014</option>
    //       <option value="2013">2013</option>
    //       <option value="2012">2012</option>
    //       <option value="2011">2011</option>
    //       <option value="2010">2010</option>
    //       <option value="2009">2009</option>
    //       <option value="2008">2008</option>
    //     </select>
    //   </div>
    // </div>
  );
}
