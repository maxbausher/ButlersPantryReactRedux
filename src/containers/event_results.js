import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

// this.props.products.results[10]
// (because Redux already returned as payload: response.data)

class EventResults extends Component {
  //
  // constructor(){
  //   super();
  //   console.log('WE ARE IN ProductResults');
  // }
  //
  // componentWillMount(){
  //   console.log('products', this.props.products);
  // }

  renderEvents({ title, venue, id, url, description }) {
    // renderEvents(events) {
    // const { title, venue, id, url, description } = events;
    // const title = events.title;
    // const venue = events.venue;
    // const id = events.id;
    // const url = events.url;
    // const description = events.description;

    return (
      <tr key={id}>
        <td>
          <strong>
            {title}
          </strong>
        </td>
        <td>
          <strong>Venue: </strong> {venue}
          <br />
          <strong>Description: </strong>
          {description}
        </td>
        <td>
          <a className="buy" href={url} target="_blank">
            Shop Eventful Now
          </a>
        </td>
      </tr>
    );
  }

  render() {
    const events = this.props.events;

    if (events && events.length) {
      return (
        <div className="resultsPage">
          <Link className="link" to="/">
            Back to Search
          </Link>
          <table className="table table-hover">
            <tbody>
              {events.map(this.renderEvents)}
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

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps)(EventResults);
