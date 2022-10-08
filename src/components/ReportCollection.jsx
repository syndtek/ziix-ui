import React, { useState, useEffect } from "react";
import getReport from "../api/getReport";

const ReportCollection = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    getReport().then((data) => {
      const { releasesInDump, dumpCreatedAt, availableCatalogs } = data;
      const createdDate = new Date(dumpCreatedAt);

      setReportData({
        releasesCount: releasesInDump,
        createdAt: createdDate.toUTCString("dd:mm:yyyy"),
        catalogsCount: availableCatalogs.length,
      });
    });
  }, [setReportData]);

  if (reportData) {
    return (
      <ul className="collection with-header">
        <li class="collection-header">
          <h4>About this dump</h4>
        </li>
        <li className="collection-item">{`Release: ${reportData.releasesCount}`}</li>
        <li className="collection-item">{`Created at: ${reportData.createdAt}`}</li>
        <li className="collection-item">{`Catalogs: ${reportData.catalogsCount}`}</li>
      </ul>
    );
  }

  return <div>ReportCollection</div>;
};

export default ReportCollection;
