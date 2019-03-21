import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login, getUsers } from "../actions";

import "./Login.css";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    if (this.props.users.filter(user => user.user_type === "business")) {
      this.props.history.push("/business");
    } else {
      this.props.history.push("/volunteer");
    }
    // .then(() => {
    //   this.props.history.push("/business");
    // });
  };

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.login}>
          <input
            className="login-input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            className="login-input"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <button className="login-button">Log In</button>
        </form>
        <div className="login-q-a">
          <h4>Don't have an account?</h4>
          <Link to="/register">Register Here!</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { login, getUsers }
)(Login);
