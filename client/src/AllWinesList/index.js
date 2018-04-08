import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchAllWines } from "../api";

const AllWinesList = props => {
  const { winesBySlug } = props;
  const winesArray = Object.values(winesBySlug);
  const wineLinks = winesArray.map(wine => {
    return (
      <p key={wine.name}>
        <Link to={`/wine/${wine.slug}`}>{wine.name}</Link>
      </p>
    );
  });
  return <div className="AllWinesList">{wineLinks}</div>;
};

export default AllWinesList;
