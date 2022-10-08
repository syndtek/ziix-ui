import React from "react";
import { useParams } from "react-router-dom";

const ReleasePage = () => {
  const { releaseCode } = useParams();
  return <div>{releaseCode}</div>;
};

export default ReleasePage;
