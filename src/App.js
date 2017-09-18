import React, { Component } from "react";
import { HashRouter } from "react-hash-router";
import Landing from "./Landing.jsx";
import "./style.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route exact path="/" component={Landing}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
