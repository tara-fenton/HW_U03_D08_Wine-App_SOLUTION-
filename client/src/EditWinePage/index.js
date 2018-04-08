import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { fetchWineBySlug, updateWine } from "../api";
import Wine from "../Wine";

class EditWinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedWineData: {
        id: 0,
        name: "",
        slug: "",
        year: "",
        price: "",
        description: "",
        country: "",
        picture_url: ""
      },
      edited: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    fetchWineBySlug(slug).then(wine => {
      this.setState({
        editedWineData: wine
      });
    });
  }

  onInputChange(fieldName, value) {
    this.setState((prevState, props) => {
      const editedWineData = Object.assign({}, prevState.editedWineData);
      editedWineData[fieldName] = value;
      return {
        editedWineData: editedWineData
      };
    });
  }
  onSubmit(evt) {
    evt.preventDefault();
    updateWine(this.state.editedWineData).then(() => {
      this.props.updateStateWithAllWines();
      this.setState({
        edited: true
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
      picture_url
    } = this.state.editedWineData;

    const { edited } = this.state;
    if (edited) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <label>
            Name{" "}
            <input
              type="text"
              onChange={evt => this.onInputChange("name", evt.target.value)}
              value={name}
            />
          </label>
        </p>
        <p>
          <label>
            Slug{" "}
            <input
              type="text"
              onChange={evt => this.onInputChange("slug", evt.target.value)}
              value={slug}
            />
          </label>
        </p>
        <p>
          <label>
            Price{" "}
            <input
              type="text"
              onChange={evt => this.onInputChange("price", evt.target.value)}
              value={price}
            />
          </label>
        </p>
        <p>
          <label>
            Year{" "}
            <input
              type="text"
              onChange={evt => this.onInputChange("year", evt.target.value)}
              value={year}
            />
          </label>
        </p>
        <p>
          <label>
            Description{" "}
            <input
              type="text"
              onChange={evt =>
                this.onInputChange("description", evt.target.value)
              }
              value={description}
            />
          </label>
        </p>
        <p>
          <label>
            country{" "}
            <input
              type="text"
              onChange={evt => this.onInputChange("country", evt.target.value)}
              value={country}
            />
          </label>
        </p>
        <p>
          <label>
            picture url{" "}
            <input
              type="text"
              onChange={evt =>
                this.onInputChange("picture_url", evt.target.value)
              }
              value={picture_url}
            />
          </label>
        </p>
        <p>
          <input type="submit" value="submit" />
        </p>
      </form>
    );
  }
}

export default EditWinePage;
