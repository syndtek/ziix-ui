import React, { useEffect, useState } from "react";
import getReport from "../api/getReport";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CatalogsList = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (!reportData) {
      getReport()
        .then((data) => setReportData(data))
        .catch((e) => console.log(e));
    }
  }, [setReportData]);

  function get() {
    return reportData.availableCatalogs.map((catalog) => (
      <Fade cascade key={catalog}>
        <Link to={`/catalog/${catalog}`} className="collection-item">
          {catalog}
        </Link>
      </Fade>
    ));
  }

  if (reportData) {
    return <div className="collection">{get()}</div>;
  }

  return <div className="collection">Loading</div>;
};

export default CatalogsList;
