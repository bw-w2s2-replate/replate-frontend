import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push(``);
        });
    }

    render() {
        return (
            <div>
          <form onSubmit ={this.login}>
            <input
            type = 'text'
            name = 'username'
            value= {this.state.credentials.username}
            onChange={this.handleChanges}
            placeholder = 'Username'
            />
            <input
            type = 'password'
            name = 'password'
            value = {this.state.credentials.password}
            onChange = {this.handleChanges}
            placeholder = 'password'
            />
            <button>Log In</button>
          </form>
          <h4>Don't have an account?</h4>
          <Link to ="/register">Register Here!</Link>
            </div>
        )
    }
}

export default connect(
    null,
    { login }
)(Login);
