import { useState } from "react";
import data from "./data.json";
import "../App.css";

const ProductList = ({ category, text, stock }) => {
  const filteredProducts = data.filter(
    (item) =>
      item.category === category &&
      item.name.toLowerCase().includes(text.toLowerCase()) &&
      (stock ? item.stocked : true)
  );

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <>
      <h4 className="cat">Category : {category}</h4>
      <table>
        <tbody>
          {filteredProducts.map((val, i) => (
            <tr key={i} className="price">
              <td style={{ color: val.stocked ? "" : "red" }}>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.stocked ? "in stock" : "out of stock"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Thinking = () => {
  const [text, setText] = useState("");
  const [stock, setStock] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheck = () => {
    setStock(!stock);
  };

  const categories = [...new Set(data.map((item) => item.category))];
  // [Fruits , Vegetables]

  return (
    <>
      <h2 className="heading">Thinking in React Assignment</h2>
      <div className="main-container">
        <div>
          <h6>Search bar</h6>
          <input
            type="text"
            value={text}
            onChange={handleText}
            placeholder="search for ..."
            className="search"
          />
          <br />
          <div className="check">
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
            <div>
              <h4>Product in stocks</h4>
            </div>
          </div>

          <div className="details">
            <div>
              <h4>Name</h4>
            </div>
            <div>
              <h4>Price</h4>
            </div>
            <div>
              <h4>Stock</h4>
            </div>
          </div>

          {/* <ProductList category="Fruits" text={text} stock={stock} />
          <ProductList category="Vegetables" text={text} stock={stock} /> */}

          {categories.map((cat, index) => (
            <ProductList key={index} category={cat} text={text} stock={stock} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Thinking;
