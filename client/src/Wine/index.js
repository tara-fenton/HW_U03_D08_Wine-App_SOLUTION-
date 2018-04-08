import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchWineBySlug } from "../api";
import "./style.css";

const Wine = props => {
  const {
    name,
    slug,
    price,
    year,
    description,
    country,
    region,
    pictureUrl
  } = props;
  return (
    <div className="Wine">
      <div className="image-wrapper">
        <img src={pictureUrl} />
      </div>
      <div className="content-wrapper">
        <h2>
          {name} ({year}) - ${price}
        </h2>
        <p>{description}</p>
        <p>
          {country}, {region}
        </p>
        <p>
          <form onSubmit={this.edit}>
            <Link to={"/wine/${slug}/edit"}>Edit</Link>
          </form>
          <button>Delete</button>
        </p>
      </div>
    </div>
  );
};

export default Wine;
