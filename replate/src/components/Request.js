import React from 'react';
import { connect } from 'react-redux';
import { deleteRequest } from '../actions'

const Request = () => {
    const request = props.requests.find(request => `${request.id}` === props.match.params.id)

    if(!request) {
        return <h3>Loading Request...</h3>
    }

    return (
        <div>
            <h1>{request.location}</h1>
            <h3>{request.quantity}</h3>
            <h3>{request.type}</h3>
            <h5>{request.expiration}</h5>
            <button onClick ={e=> props.deleteRequest(e, request.id)}></button>
            {/* <button onClick= {e => props.setUpdateForm(e, request)}></button> */}
        </div>
    )
}

const mapStateToProps = state => ({
    requests: state.requests
})

export default connect(
    mapStateToProps,
    { deleteRequest }
)(Request);
