import React from "react";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.fullName = "blame";
  }

  render() {
    return (
      <div>
        <h2>class component</h2>
        <button>click</button>
        <SubClass data={this.fullName} />
      </div>
    );
  }
}

class SubClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <h1>hello subclass {this.props.data} </h1>;
  }
}

export default Sample;
