import React from 'react';
import { connect } from 'react-redux';
import { deleteRequest } from '../actions';

class Request extends React.Component {
    setUpdateForm = (e, request) => {
        e.preventDefault();
        this.setState({
            activeRequest: request
        });
        this.props.history.push('/request-form');
    };

    delRequest = (e, id) => {
        e.preventDefault();
        this.props.deleteRequest(id);
        // .then(res => {
        //     this.setState({
        //         requests: res.data
        //     });
        //     this.props.history.push('/business');
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        this.props.history.push('/business');
    };

    render() {
        const request = this.props.requests.find(req => `${req.id}` === this.props.match.params.id);

        if (!request) {
            return <h3>Loading Request...</h3>;
        }

        return (
            <div>
                <h1>{request.food_location}</h1>
                <h3>{request.food_amount}</h3>
                <h3>{request.food_type}</h3>
                {/* <h5>{request.expiration}</h5> */}
                <button onClick={e => this.delRequest(e, request.id)}>Delete Request</button>
                <button onClick={e => this.setUpdateForm(e, request)}>Update Request</button>
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
    { deleteRequest }
)(Request);
