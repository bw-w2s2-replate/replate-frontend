import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class Volunteer extends React.Component {

    render () {
        return (
        <div>
        <nav>
            <input 
            type = 'text'
            placeholder = 'Search for a request...'
            />
            <NavLink to= "/volunteer">Home</NavLink>
            <NavLink to= "/accepted-requests">Accepted Requests</NavLink>
        </nav>
        <h1>Requests</h1>
        {this.props.requests.map(request => (
            <Link to = {`/volunteer/${request.id}`} key={request.id}>
                <div>
                    <h1>{request.location}</h1>
                    <h3>{request.quantity}</h3>
                    <h3>{request.type}</h3>
                    <h5>{request.expiration}</h5>
                </div>
            </Link>
        ))}
        </div>
        );
    }
}

const mapStateToProps = state => ({
    requests: state.requests,
})

export default connect(
    mapStateToProps,
    {}
)(Volunteer);



