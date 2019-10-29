import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    keyword: "",
    images: []
  };

  handleKeyword = word => {
    this.setState({ keywrod: word });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleKeyword={this.handleKeyword} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
