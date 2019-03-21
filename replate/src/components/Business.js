import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getRequests } from "../actions";

import "./Business.css";

class Business extends React.Component {
  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    return (
      <div>
        <nav className="business-nav">
          <NavLink className="nav-link" to="/business">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/request-form">
            Add Request
          </NavLink>
        </nav>
        <h1>Requests</h1>
        <div className="request-list">
          {this.props.requests.map(request => (
            <Link
              className="links"
              to={`/business/${request.id}`}
              key={request.id}
            >
              <div className="requests">
                <h1 className="text">{request.food_location}</h1>
                <h3 className="text">{request.food_amount}</h3>
                <h3 className="text">{request.food_type}</h3>
                {/* <h5>{request.expiration}</h5> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requests: state.requests,
  activeRequest: state.activeRequest
});

export default connect(
  mapStateToProps,
  { getRequests }
)(Business);
