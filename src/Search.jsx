import React, { Component } from "react";
import preload from "./data.json";
import ShowCard from './ShowCard';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        {preload.shows.map(show => {
          return <ShowCard show={show}/>;
        })}
      </div>
    );
  }
}
