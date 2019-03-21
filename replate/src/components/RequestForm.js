import React from 'react';

import { connect } from 'react-redux';

import { addRequest, updateRequest } from '../actions';

import './RequestForm.css';

class RequestForm extends React.Component {
    state = {
        request: this.props.activeRequest || {
            food_location: '',
            food_amount: '',
            food_type: '',
            food_expiration: ''
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.activeRequest && prevProps === this.props.activeRequest) {
            this.setState({
                request: this.props.activeRequest
            });
        }
    }

    handleChanges = e => {
        e.persist();
        // e.preventDefault();
        // if (e.target.name === 'food_expiration') {
        //     const expVal = new Date(e.target.value)
        //     this.setState({
        //         request: {
        //             ...this.state,
        //             food_expiration: expVal
        //         }
        //     });
        // if (e.target.name === 'food_amount') {
        //     const quantity = Number(e.target.value)
        //     this.setState({
        //         request: {
        //             ...this.state,
        //             food_amount: quantity
        //         }
        //     });
        // } else {
        this.setState({
            request: {
                ...this.state.request,
                [e.target.name]: e.target.value
            }
        });
        // }
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.activeRequest) {
            this.props.updateRequest(this.state.request);
        } else {
            this.props.addRequest(this.state.request);
        }
        this.setState({
            request: {
                food_location: '',
                food_amount: '',
                food_type: '',
                food_expiration: ''
            }
        });
        // this.props.history.push('/business');
        setTimeout(() => this.props.history.push('/business'), 1000);
    };

    addReq = e => {
        e.preventDefault();
        this.props.addRequest(this.state.request);
        this.setState({ food_location: '', food_amount: '', food_type: '', food_expiration: '' });
        this.props.history.push('/business');
    };

    render() {
        return (
            <div className="add-request">
                <h1 className="request-form-title">{`${this.props.activeRequest ? 'Update' : 'Add'} Request`}</h1>
                <form className="request-form" onSubmit={this.handleSubmit}>
                    <input
                        className="request-form-input"
                        type="text"
                        name="food_location"
                        onChange={this.handleChanges}
                        placeholder="Location"
                        value={this.state.request.food_location}
                    />
                    {/* TODO: Fix uncontrolled input */}
                    <input
                        className="request-form-input"
                        type="text"
                        name="food_amount"
                        onChange={this.handleChanges}
                        placeholder="Quantity"
                        value={this.state.request.food_amount}
                    />
                    <input
                        className="request-form-input"
                        type="text"
                        name="food_type"
                        onChange={this.handleChanges}
                        placeholder="Type of Food"
                        value={this.state.request.food_type}
                    />
                    <input
                        className="request-form-input"
                        type="datetime-local"
                        name="food_expiration"
                        onChange={this.handleChanges}
                        placeholder="Expiration"
                        value={this.state.request.food_expiration}
                    />
                    <button className="request-form-btn">{`${this.props.activeRequest ? 'Update' : 'Add'}Request`}</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeRequest: state.activeRequest
});

export default connect(
    mapStateToProps,
    { addRequest, updateRequest }
)(RequestForm);
