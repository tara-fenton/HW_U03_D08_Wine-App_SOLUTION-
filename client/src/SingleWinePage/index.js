import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchWineBySlug } from "../api";
import Wine from "../Wine";

class AllWinesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wine: {}
    };
  }
  componentDidMount() {
    const { slug } = this.props.match.params;
    fetchWineBySlug(slug).then(wine => {
      this.setState({
        wine: wine
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevSlug = prevProps.match.params.slug;
    const newSlug = this.props.match.params.slug;
    if (prevSlug !== newSlug) {
      fetchWineBySlug(newSlug).then(wine => {
        this.setState({
          wine: wine
        });
      });
    }
  }

  render() {
    const {
      name,
      slug,
      price,
      year,
      description,
      country,
      region,
      picture_url
    } = this.state.wine;
    if (!name) {
      return <p>Loading...</p>;
    }
    return (
      <Wine
        name={name}
        slug={slug}
        price={price}
        year={year}
        description={description}
        country={country}
        region={region}
        pictureUrl={picture_url}
      />
    );
  }
}

export default AllWinesList;
