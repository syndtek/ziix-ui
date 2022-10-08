import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getCatalog from "../api/getCatalog";
import { ReleaseCard } from "../components";

const CatalogViewPage = () => {
  const { catalogId } = useParams();
  const [catalog, setCatalog] = useState(null);

  /* Effect */
  useEffect(() => {
    getCatalog(catalogId)
      .then((data) => setCatalog(data))
      .catch((e) => console.log(e));
  }, [setCatalog]);

  if (catalog) {
    const target = catalog.slice(-16);

    const cards = target.map((data) => (
      <div className="col s12 m3 l2" key={data.code}>
        <ReleaseCard code={data.code} />
      </div>
    ));

    return (
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    );
  }

  return <div>CatalogViewPage</div>;
};

export default CatalogViewPage;
