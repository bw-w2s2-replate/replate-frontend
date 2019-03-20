import React from 'react';
import { connect } from 'react-redux';

class VRequest extends React.Component {

    render () {
        const request = this.props.requests.find(request => `${request.id}` === this.props.match.params.id)

        if (!request) {
            return <h3>Loading Request...</h3>
        }

        return (
            <div>
                <h1>{request.food_location}</h1>
                <h3>{request.food_quantity}</h3>
                <h3>{request.food_type}</h3>
                <h5>{request.food_expiration}</h5>
                <button>Accept Request</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    requests: state.requests
})

export default connect(
    mapStateToProps,
    { }
)(VRequest);
