import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllWinesList from "./AllWinesList";
import SingleWinePage from "./SingleWinePage";
import AllWinesPage from "./AllWinesPage";
import NewWinePage from "./NewWinePage";
import EditWinePage from "./EditWinePage";
import { fetchAllWines } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winesBySlug: {}
    };
    this.updateStateWithAllWines = this.updateStateWithAllWines.bind(this);
  }

  componentDidMount() {
    this.updateStateWithAllWines();
  }

  updateStateWithAllWines() {
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
    return (
      <Router>
        <div className="App">
          <h1 className="page-title">Wine Time</h1>
          <div className="sidebar-main-container">
            <div className="sidebar">
              <h2>All Wines</h2>
              <AllWinesList winesBySlug={winesBySlug} />
              <Link to="/wine/new">Add new wine</Link>
            </div>
            <div className="main">
              <Route
                exact
                path="/"
                render={() => {
                  return <AllWinesPage winesBySlug={winesBySlug} />;
                }}
              />
              <Route
                exact
                path="/wine/:slug"
                render={props => {
                  if (props.match.params.slug === "new") {
                    return null;
                  }
                  return (
                    <SingleWinePage
                      match={props.match}
                      history={props.history}
                      location={props.location}
                      updateStateWithAllWines={this.updateStateWithAllWines}
                    />
                  );
                }}
              />
              <Route
                path="/wine/new"
                render={() => {
                  return (
                    <NewWinePage
                      updateStateWithAllWines={this.updateStateWithAllWines}
                    />
                  );
                }}
              />
              <Route
                path="/wine/:slug/edit"
                render={props => {
                  return (
                    <EditWinePage
                      match={props.match}
                      history={props.history}
                      location={props.location}
                      updateStateWithAllWines={this.updateStateWithAllWines}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
