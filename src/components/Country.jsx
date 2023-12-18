import api from "axios";
import React from "react";

export default class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log("clicked");
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <>
        <div className="p-4 text-3xl font-semibold bg-teal-400">
          Search for country
        </div>
        <div className="text-center text-3xl mt-2 font-semibold">
          Enter country name
        </div>
        <div className="m-5 mb-2 flex justify-center">
          <input
            className="border-2 border-black rounded-md p-1"
            placeholder="enter country name"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={this.handleClick}
            className="bg-slate-400 p-1.5 rounded"
          >
            search
          </button>
        </div>
      </>
    );
  }
}
