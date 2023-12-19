import { useState } from "react";
import data from "./data.json";
import "../App.css";

const App = () => {
  const [text, setText] = useState("");
  const [stock, setStock] = useState(false);

  const handleText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleCheck = () => {
    setStock(!stock);
  };

  return (
    <>
      <h2 className="heading">Thinking in react Assignment</h2>
      <div className="main-container">
        <div>
          <input
            type="text"
            value={text}
            onChange={handleText}
            placeholder="search"
            className="search"
          />
          <br />
          <div className="check">
            <div>
              <h5>Product in stocks</h5>
            </div>
            <div className="checkbox-wrapper-45">
              <input
                id="cbx-45"
                type="checkbox"
                checked={stock}
                onChange={handleCheck}
              />
              <label className="cbx" htmlFor="cbx-45">
                <div className="flip">
                  <div className="front"></div>
                  <div className="back">
                    <svg width="16" height="14" viewBox="0 0 16 14">
                      <path d="M2 8.5L6 12.5L14 1.5"></path>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <h4>Fruits</h4>
          {data
            .filter((ele) => ele.category === "Fruits")
            .filter((e) => e.name.toLowerCase().includes(text.toLowerCase()))
            .filter((ele) => (stock ? ele.stocked : true))
            .map((val, i) => {
              return (
                <div key={i} className="price">
                  <p style={{ color: val.stocked ? "" : "red" }}>{val.name}</p>
                  <p>{val.price}</p>
                </div>
              );
            })}
          <h4>Vegetables</h4>
          {data
            .filter((ele) => ele.category === "Vegetables")
            .filter((e) => e.name.toLowerCase().includes(text.toLowerCase()))
            .filter((ele) => (stock ? ele.stocked : true))
            .map((val, i) => {
              return (
                <div key={i} className="price">
                  <div>
                    <p style={{ color: val.stocked ? "" : "red" }}>
                      {val.name}
                    </p>
                  </div>
                  <div>
                    <p>{val.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default App;
