import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchAllWines } from "../api";

class AllWinesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winesBySlug: {}
    };
  }
  componentDidMount() {
    fetchAllWines().then(wines => {
      const winesBySlug = {};
      wines.forEach(wine => {
        winesBySlug[wine.slug] = wine;
      });
      this.setState({
        winesBySlug: winesBySlug
      });
    });
  }
  render() {
    const { winesBySlug } = this.state;
    const winesArray = Object.values(winesBySlug);
    const wineLinks = winesArray.map(wine => {
      return (
        <p key={wine.name}>
          <Link to={`/wine/${wine.slug}`}>{wine.name}</Link>
        </p>
      );
    });
    return <div className="AllWinesList">{wineLinks}</div>;
  }
}

export default AllWinesList;
