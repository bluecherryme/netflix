import React, { Component } from "react";
import preload from "./data.json";
import ShowCard from "./ShowCard";

export default class Search extends Component {
  state = { searchTerm: "" };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toLowerCase()
                .match(this.state.searchTerm.toLowerCase())
            )
            .map((show, index) => {
              return <ShowCard key={index} show={show} />;
            })}
        </div>
      </div>
    );
  }
}
