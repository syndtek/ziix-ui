import React, { useState, useEffect } from "react";
import getRelease from "../api/getRelease";
import { Link } from "react-router-dom";

const ReleaseCard = ({ code }) => {
  const [releaseData, setReleaseData] = useState();

  /* Effect 🔀 */
  useEffect(() => {
    getRelease(code)
      .then((data) => setReleaseData(data))
      .catch((e) => console.log(e));
  });

  if (releaseData) {
    return (
      <div className="card">
        <div className="card-image">
          <img src={`/dump/release/${code}/poster.jpg`} alt="" />
          {/* <span className="card-title">{releaseData.code}</span> */}
        </div>
        <div className="card-action">
          <Link to={`/release/${code}`}>View</Link>
        </div>
      </div>
    );
  }

  return <div>ReleaseCard</div>;
};

export default ReleaseCard;
