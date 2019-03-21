import React from "react";
import { connect } from "react-redux";

import "./VRequest.css";

class VRequest extends React.Component {
  acceptRequest = e => {
    e.preventDefault();
    this.setState({
      claimed: true
    });
    if (this.props.requests.claimed === "true") {
      this.props.history.push("./accepted-requests");
    }
  };

  render() {
    const request = this.props.requests.find(
      request => `${request.id}` === this.props.match.params.id
    );

    if (!request) {
      return <h3>Loading Request...</h3>;
    }

    return (
      <div className="request">
        <h1>{request.food_location}</h1>
        <h3>{request.food_quantity}</h3>
        <h3>{request.food_type}</h3>
        <h5>{request.food_expiration}</h5>
        <p>{request.claimed}</p>
        <button className="btn" onClick={this.acceptRequest}>
          Accept Request
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requests: state.requests,
  claimed: state.requests.claimed
});

export default connect(
  mapStateToProps,
  {}
)(VRequest);
