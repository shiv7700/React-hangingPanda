import React, { useState } from "react";
import data from "./data.json";

const Thinking = () => {
  const [text, setText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const handleStockChange = () => {
    setInStockOnly(!inStockOnly);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleSearch}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleStockChange}
          />{" "}
          Only show products in stock
        </label>
      </form>
      <h4>Fruits</h4>
      {data
        .filter((ele) => ele.category === "Fruits")
        .filter((element) =>
          element.name.toLowerCase().includes(text.toLowerCase())
        )
        .filter((element) => (inStockOnly ? element.stocked : true))
        .map((element, index) => {
          return (
            <div key={index}>
              <span style={{ color: element.stocked ? "" : "red" }}>
                {element.name}
              </span>
              {element.price}
            </div>
          );
        })}
      <h4>Vegetables</h4>
      {data
        .filter((ele) => ele.category === "Vegetables")
        .filter((element) =>
          element.name.toLowerCase().includes(text.toLowerCase())
        )
        .filter((element) => (inStockOnly ? element.stocked : true))
        .map((element, index) => {
          return (
            <div key={index}>
              <span style={{ color: element.stocked ? "" : "red" }}>
                {element.name}
              </span>
              {element.price}
            </div>
          );
        })}
    </>
  );
};

export default Thinking;
