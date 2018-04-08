import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllWinesList from "./AllWinesList";
import SingleWinePage from "./SingleWinePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="page-title">Wine Time</h1>
          <div className="sidebar-main-container">
            <div className="sidebar">
              <h2>All Wines</h2>
              <AllWinesList />
              <Link to="/wine/new">Add new wine</Link>
            </div>
            <div className="main">
              <Route
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
