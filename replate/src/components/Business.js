import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class Business extends React.Component {
    render() {
    

    return(
        <div>
        <nav>
            <NavLink to = "/business">Home</NavLink>
            <NavLink to ="/request-form">{`${this.props.activeRequest ? 'Update' : 'Add'}Request`}</NavLink>
        </nav>
        <h1>Requests</h1>
        {this.props.requests.map(request => (
            <Link to = {`/business/${request.id}`} key={request.id}>
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
    activeRequest: state.activeRequest
})

export default connect(
    mapStateToProps,
    {}
)(Business);
