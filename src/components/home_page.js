import React, { Component } from "react";
import { connect } from "react-redux";

import ProductForm from "../containers/product_form";
import EventForm from "../containers/event_form";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h1 id="heroTitle">Butlers Pantry</h1>
          <p id="heroP">Product or Experience, we will find it together</p>
        </div>
        <div className="productForm">
          <ProductForm />
        </div>
        <div className="eventForm">
          <EventForm />
        </div>
      </div>
    );
  }
}
