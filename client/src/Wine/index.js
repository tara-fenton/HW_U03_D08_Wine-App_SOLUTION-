import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { deleteWineBySlug } from "../api";
import "./style.css";

class Wine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
    this.deleteFormSubmit = this.deleteFormSubmit.bind(this);
  }

  deleteFormSubmit(evt) {
    evt.preventDefault();
    deleteWineBySlug(this.props.slug).then(() => {
      this.setState({
        deleted: true
      });
    });
  }

  render() {
    const {
      name,
      slug,
      price,
      year,
      description,
      country,
      pictureUrl
    } = this.props;
    const { deleted } = this.state;
    if (deleted) {
      return <Redirect to="/" />;
    }
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
          <p>{country}</p>
          <p>
            <Link to={`/wine/${slug}/edit`}>Edit</Link>
          </p>
          <form onSubmit={this.deleteFormSubmit}>
            <button>Delete</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Wine;
