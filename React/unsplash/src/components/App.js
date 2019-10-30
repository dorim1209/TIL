import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: [],
    pageNum: 1
  };

  handlePlus = async () => {
    await this.setState({ pageNum: this.state.pageNum + 1 });
    console.log(this.state.pageNum);
  };
  handleMinus = async () => {
    await this.setState({ pageNum: this.state.pageNum - 1 });
    console.log(this.state.pageNum);
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };

  onSubmit = async () => {
    const response = await unsplash.get("search/photos", {
      params: {
        page: this.state.pageNum,
        query: this.state.keyword,
        per_page: 5
      }
    });
    this.setState({ images: response.data.results });
    // `search/photos?query=${word}`
  };

  render() {
    if (this.state.images.length === 0) {
      console.log(this.state.images);
      return (
        <div className="ui container">
          <SearchBar
            handleKeyword={this.handleKeyword}
            onSubmit={this.onSubmit}
          />
          <ImageList images={this.state.images} />
        </div>
      );
    }
    if (this.state.pageNum > 1) {
      console.log(this.state.images);
      return (
        <div className="ui container">
          <SearchBar
            handleKeyword={this.handleKeyword}
            onSubmit={this.onSubmit}
          />
          <div>
            <button
              onClick={async () => {
                await this.handleMinus();
                this.onSubmit();
              }}
            >
              Prev
            </button>
            <button
              onClick={async () => {
                await this.handlePlus();
                this.onSubmit();
              }}
            >
              Next
            </button>
          </div>
          <ImageList images={this.state.images} />
        </div>
      );
    } else {
      console.log(this.state.images);
      return (
        <div className="ui container">
          <SearchBar
            handleKeyword={this.handleKeyword}
            onSubmit={this.onSubmit}
          />
          <div>
            <button
              onClick={async () => {
                await this.handlePlus();
                this.onSubmit();
              }}
            >
              Next
            </button>
          </div>
          <ImageList images={this.state.images} />
        </div>
      );
    }
  }
}
