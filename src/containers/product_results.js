import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

// this.props.products.results[10]
// (because Redux already returned as payload: response.data)

class ProductResults extends Component {
  //
  // constructor(){
  //   super();
  //   console.log('WE ARE IN ProductResults');
  // }
  //
  // componentWillMount(){
  //   console.log('products', this.props.products);
  // }

  renderProducts(products) {
    const title = products.title;
    const imgURL = products.image_url;
    const id = products.id;
    const url = products.url;

    return (
      <tr key={id}>
        <td>
          {title}
        </td>
        <td>
          <img className="resultImg" src={imgURL} />
        </td>
        <td>
          <a className="buy" target="_blank" href={url}>
            Buy on Amazon
          </a>
        </td>
      </tr>
    );
  }

  render() {
    const products = this.props.products;

    if (products && products.length) {
      return (
        <div className="resultsPage">
          <Link className="link" to="/">
            Back to Search
          </Link>
          <table className="table table-hover">
            <tbody>
              {products.map(this.renderProducts)}
            </tbody>
          </table>
          <Link className="link" to="/">
            Back to Search
          </Link>
        </div>
      );
    } else {
      return <div>LOADING...</div>;
    }
  } //render
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(ProductResults);
