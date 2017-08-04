import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/index";
import { withRouter } from "react-router-dom";

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    this.props.fetchProducts(this.state.term, this.dropdown.value);
    this.setState({ term: "" });
    this.props.history.push("/products");
  }

  render() {
    const categories = [
      "All",
      "Appliances",
      "ArtsAndCrafts",
      "Beauty",
      "Books",
      "GiftCards",
      "Movies",
      "Music",
      "SportingGoods",
      "Tools",
      "Toys",
      "VideoGames",
      "Wine"
    ];
    const options = categories.map((category, index) => {
      return (
        <option key={index}>
          {category}
        </option>
      );
    });

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <label id="formLabel" htmlFor="eventSelect">
          Select Category
        </label>
        <select id="eventSelect" ref={dropdown => (this.dropdown = dropdown)}>
          <option defaultValue="" />
          {options}
        </select>
        <div>
          <input
            placeholder="Search for products by interest or brand"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            id="searchInput"
          />
          <span className="input-group-btn">
            <button
              onSubmit={this.onFormSubmit}
              type="submit"
              className="btn btn-secondary"
              id="submitBtn"
            >
              Search for Product
            </button>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(ProductForm));
