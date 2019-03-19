import React from 'react';

import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {
        user: {
            username: '',
            address: '',
            license: '',
            type: '',
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
            this.props.history.push(``);
        });
    };

    render(){
        return (
            <div>
                <form onSubmit ={this.register}>
                    <input 
                    type ='text'
                    name = 'username'
                    value = {this.state.user.username}
                    onChange ={this.handleChanges}
                    placeholder = 'Username'
                    />
                    <input 
                    type ='text'
                    name = 'address'
                    value = {this.state.user.address}
                    onChange ={this.handleChanges}
                    placeholder = 'Address'
                    />
                    <input 
                    type ='text'
                    name = 'license'
                    value = {this.state.user.license}
                    onChange ={this.handleChanges}
                    placeholder = 'License?'
                    />
                    <input 
                    type ='text'
                    name = 'type'
                    value = {this.state.user.type}
                    onChange ={this.handleChanges}
                    placeholder = 'Business or Volunteer'
                    />
                    <input 
                    type ='password'
                    name = 'password'
                    value = {this.state.user.password}
                    onChange ={this.handleChanges}
                    placeholder = 'Password'
                    />
                    <button>Register</button>
                </form>
                <h4>Already have an account?</h4>
                <Link to = "/">Log In!</Link>
            </div>

        )
    }
}

export default Register;

