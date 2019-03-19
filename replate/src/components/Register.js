import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions';

import './Register.css';

class Register extends React.Component {
    state = {
        user: {
            username: '',
            // address: '',
            // license: '',
            // type: '',
            password: '',
        }
    };

    handleChanges = e => {
        this.setState ({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.user).then(() => {
            this.props.history.push('/');
        });
    };

    render(){
        return (
            <div className ="register">
                <form className ="register-form" onSubmit ={this.register}>
                    <input className ="register-input"
                    type ='text'
                    name = 'username'
                    value = {this.state.user.username}
                    onChange ={this.handleChanges}
                    placeholder = 'Username'
                    />
                    <input className ="register-input"
                    type ='text'
                    name = 'address'
                    value = {this.state.user.address}
                    onChange ={this.handleChanges}
                    placeholder = 'Address'
                    />
                    <input className ="register-input"
                    type ='text'
                    name = 'license'
                    value = {this.state.user.license}
                    onChange ={this.handleChanges}
                    placeholder = 'License?'
                    />
                    <input className ="register-input"
                    type ='text'
                    name = 'type'
                    value = {this.state.user.type}
                    onChange ={this.handleChanges}
                    placeholder = 'Business or Volunteer'
                    />
                    <input className ="register-input"
                    type ='password'
                    name = 'password'
                    value = {this.state.user.password}
                    onChange ={this.handleChanges}
                    placeholder = 'Password'
                    />
                    <button className ="register-button">Register</button>
                </form>
                <div className="register-q-a">
                <h4>Already have an account?</h4>
                <Link to = "/">Log In!</Link>
                </div>
            </div>

        )
    }
}



export default connect(
    null,
{ register }
)(Register);

