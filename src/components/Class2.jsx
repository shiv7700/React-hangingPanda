import React from "react";
import product from "../data.json";

export default class Class2 extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "all",
    };
    this.changed = this.changed.bind(this);
  }

  changed(e) {
    console.log(e.target.value);
    this.setState({ selected: e.target.value });
  }

  render() {
    const requiredProduct = product.products.filter((elem) => {
      if (this.state.selected === "all") {
        return elem;
      }
      return elem.category === this.state.selected;
    });
    console.log(requiredProduct);
    return (
      <>
        <h2 className="p-2 text-2xl font-semibold bg-red-400 rounded-sm">
          Extracting data from json
        </h2>
        <div className="m-5">
          <select
            onChange={this.changed}
            className="border-2 border-red-700 rounded-md p-1"
          >
            <option value="all">all</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home decoration</option>
          </select>
        </div>
        <div className="p-4 flex justify-center flex-wrap gap-10">
          {requiredProduct.map((element) => {
            return (
              <div
                className="border-2 border-red-700 rounded-lg h-auto w-72 p-4"
                key={element.id}
              >
                <img
                  src={element.images[0]}
                  alt={element.title}
                  className="h-40 w-40 rounded-xl mb-4"
                />
                <p>Name : {element.title}</p>
                <p>Description : {element.description.slice(0, 70)}...</p>
                <p>Price : {element.price} </p>
                <p>Rating : {element.rating}</p>
                <p>Brand : {element.brand}</p>
                <p>category : {element.category}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
