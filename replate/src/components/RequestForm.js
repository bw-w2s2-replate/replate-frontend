import React from 'react';

import { connect } from 'react-redux';

import { addRequest, updateRequest } from '../actions';

import './RequestForm.css'

class RequestForm extends React.Component {
    state = {
        request: this.props.activeRequest || {
            location: '',
            quantity: '',
            type: '',
            expiration: ''
        }
    };

    componentDidUpdate(prevProps) {
        if( this.props.activeRequest && prevProps === this.props.activeRequest)
        {
            this.setState ({
                request: this.props.activeRequest
            });
        }
    }

    handleChanges = e => {
        this.setState(prevState => ({
            request: {
                ...prevState.request,
                [e.target.name]: e.target.value
            }
        }));
    }

    handleSubmit = e => {
        if (this.props.activeRequest) {
            this.props.updateRequest(e, this.state.request)
        }
        else {
            this.props.addRequest(e, this.state.request)
        }
        this.setState({
            request: {
                location: '',
                quantity: '',
                type: '',
                expiration: ''
            }
        });
    }

    render() {
        return (
            <div className = "add-request">
                <h1 className = "request-form-title">{`${this.props.activeRequest ? 'Update' : 'Add'} Request`}</h1>
                <form className ="request-form"onSubmit = {this.handleSubmit}>
                <input className="request-form-input"
                type = 'text'
                name = 'location'
                onChange = {this.handleChanges}
                placeholder = 'Location'
                value = {this.state.request.location}
                />
                <input className="request-form-input"
                type = 'text'
                name = 'quantity'
                onChange = {this.handleChanges}
                placeholder = 'Quantity'
                value = {this.state.request.quantity}
                />
                <input className="request-form-input"
                type = 'text'
                name = 'type'
                onChange = {this.handleChanges}
                placeholder = 'Type of Food'
                value = {this.state.request.type}
                />
                <input className="request-form-input"
                type = 'datetime-local'
                name = 'expiration'
                onChange = {this.handleChanges}
                placeholder = 'Expiration'
                value = {this.state.request.expiration}
                />
                <button className ="request-form-btn">{`${this.props.activeRequest ? 'Update' : 'Add'}Request`}</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    activeRequest: state.activeRequest
});

export default connect(
mapStateToProps,
{ addRequest, updateRequest  }
)(RequestForm);
