import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <form className="ui form">
            <label htmlFor="keyword">Search in Eng!</label>
            <input type="text" id="keyword" />
          </form>
        </div>
      </div>
    );
  }
}
