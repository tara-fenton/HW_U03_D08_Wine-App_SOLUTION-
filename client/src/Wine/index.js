import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchWineBySlug } from "../api";
import "./style.css";

const Wine = props => {
  const { name, year, description, country, region, pictureUrl } = props;
  return (
    <div className="Wine">
      <div className="image-wrapper">
        <img src={pictureUrl} />
      </div>
      <div className="content-wrapper">
        <h2>
          {name} ({year})
        </h2>
        <p>{description}</p>
        <p>
          {country}, {region}
        </p>
        <p>
          <button>Edit</button>
          <button>Delete</button>
        </p>
      </div>
    </div>
  );
};

export default Wine;
