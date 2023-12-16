import React from "react";

export default class Class extends React.Component {
  // constructor function
  constructor() {
    super();
    this.customProperty = "react 16";
    this.state = {
      color: "",
      count: 0,
      text: "",
    };

    // bind this to method
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleText = this.handleText.bind(this);
    this.textBlur = this.textBlur.bind(this);
    this.textFocus = this.textFocus.bind(this);
  }

  increase() {
    console.log("increase");
    this.setState({ count: this.state.count + 1 });
  }

  decrease() {
    console.log("decrease");
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  handleText(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  textBlur() {
    console.log("blur");
  }

  textFocus() {
    console.log("focus");
  }

  // render to load html
  render() {
    return (
      <>
        <div>
          <h2 className="text-3xl font-bold p-5">Class Component in react</h2>
          <p className="ms-5 bg-slate-400 p-2 rounded">
            Counter :
            <span className="text-2xl font-bold text-red-600 ps-1">
              {this.state.count}
            </span>
          </p>
          <div className="flex gap-5 ms-5 mt-5">
            <button
              onClick={this.increase}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              increase
            </button>
            <button
              onClick={this.decrease}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              decrease
            </button>
          </div>
        </div>
        <div className="mt-4 p-5">
          try to write something
          <input
            type="text"
            placeholder="Type here"
            className="border-2 border-red-700 p-1 ms-2 rounded-xl"
            value={this.state.text}
            onBlur={this.textBlur}
            onFocus={this.textFocus}
            onChange={this.handleText}
          />
          <div className="ms-4 text-xl font-medium text-fuchsia-950">
            {this.state.text}
          </div>
        </div>
      </>
    );
  }
}
