import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getRequests } from "../actions";

import "./Volunteer.css";

class Volunteer extends React.Component {
  state = {
    request_location: ""
  };

  handleChanges = e => {
    this.setState({
      request_location: e.target.value
    });
  };

  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    return (
      <div>
        <nav className="volunteer-nav">
          <input
            type="text"
            placeholder="Search for a request..."
            onChange={this.handleChanges}
            value={this.state.request_location}
          />
          <NavLink className="nav-link" to="/volunteer">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/accepted-requests">
            Accepted Requests
          </NavLink>
        </nav>
        <h1>Requests</h1>
        <div className="request-list">
          {this.props.requests.map(request => (
            <Link
              className="links"
              to={`/volunteer/${request.id}`}
              key={request.id}
            >
              <div className="requests">
                <h1 className="text">{request.food_location}</h1>
                <h3 className="text">{request.food_quantity}</h3>
                <h3 className="text">{request.food_type}</h3>
                <h5 className="text">{request.food_expiration}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requests: state.requests
});

export default connect(
  mapStateToProps,
  { getRequests }
)(Volunteer);

// this.props.requests.filter(request => request.food_location.includes(this.state.request_location)
