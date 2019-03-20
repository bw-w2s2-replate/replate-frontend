import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getRequests } from '../actions';

class Volunteer extends React.Component {

    componentDidMount() {
        this.props.getRequests();
    }

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
                    <h1>{request.food_location}</h1>
                    <h3>{request.food_quantity}</h3>
                    <h3>{request.food_type}</h3>
                    <h5>{request.food_expiration}</h5>
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
    { getRequests }
)(Volunteer);



