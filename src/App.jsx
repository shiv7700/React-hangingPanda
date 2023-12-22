import React, { Component } from "react";
import TodDo from "./components/ToDo";
import Header from "./components/Header";
import "./App.css";
import Add from "./components/Add";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Header />
        {/* <TodDo /> */}
        <Add />
      </>
    );
  }
}
