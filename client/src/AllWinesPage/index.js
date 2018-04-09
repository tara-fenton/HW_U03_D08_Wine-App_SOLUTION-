import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

const AllWinesPage = props => {
  const { winesBySlug } = props;
  // Convert the wines object into an array of individual wine
  const winesArray = Object.values(winesBySlug);
  // Iterate over each wine to create a separate element to represent it.
  const wines = winesArray.map(wine => {
    return (
      <div className="wine">
        <Link to={`/wine/${wine.slug}`}>
          <img src={wine.picture_url} />
          <h3>{wine.name}</h3>
        </Link>
      </div>
    );
  });
  return <div className="AllWinesPage">{wines}</div>;
};

export default AllWinesPage;
