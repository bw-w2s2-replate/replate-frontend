import React from 'react';
import { connect } from 'react-redux';

class Accepted extends React.Component {

    render () {
        const request = this.props.requests.find(request => `${request.claimed}` === this.props.match.params.claimed)
    
        if (!request) {
            return <h3>Loading your accepted requests...</h3>
        }

        return (
            <div>
            <h1>{request.location}</h1>
            <h3>{request.quantity}</h3>
            <h3>{request.type}</h3>
            <h5>{request.expiration}</h5>
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
)(Accepted);
