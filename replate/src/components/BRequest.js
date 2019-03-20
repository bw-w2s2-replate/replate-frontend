import React from 'react';
import { connect } from 'react-redux';
import { deleteRequest } from '../actions'

class Request extends React.Component {
   
    render() {
        const request = this.props.requests.find(req => `${req.id}` === this.props.match.params.id)

        if(!request) {
            return <h3>Loading Request...</h3>
        }

    return (
        <div>
            <h1>{request.food_location}</h1>
            <h3>{request.food_amount}</h3>
            <h3>{request.food_type}</h3>
            {/* <h5>{request.expiration}</h5> */}
            <button onClick ={e=> this.props.deleteRequest(e, request.id)}>Delete Request</button>
            {/* <button onClick= {e => props.setUpdateForm(e, request)}></button> */}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    requests: state.requests
})

export default connect(
    mapStateToProps,
    { deleteRequest }
)(Request);
