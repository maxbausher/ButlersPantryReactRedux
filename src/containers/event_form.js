import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions/index";
import { withRouter } from "react-router-dom";

class EventForm extends Component {
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
    this.props.fetchEvents(this.state.term, this.dropdown.value);
    this.setState({ term: "" });
    this.props.history.push("/events");
  }

  render() {
    const categories = [
      "music",
      "comedy",
      "outdoors_recreation",
      "food",
      "performing_arts",
      "sports",
      "attractions"
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
        <label id="formLabel" className="formLabel" htmlFor="eventSelect">
          Select Category
        </label>
        <select id="eventSelect" ref={dropdown => (this.dropdown = dropdown)}>
          <option value="select" />
          {options}
        </select>
        <div>
          <input
            placeholder="Search for experiences based on location"
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
              Search for Activities
            </button>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(EventForm));
