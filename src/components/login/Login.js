import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    const User = {
      username: this.state.username,
      password: this.state.password
    };

    e.preventDefault();
    axios
      .post("https://keylearns.herokuapp.com/login/", User, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(data => {
        this.props.sendToken(data.data.token);
        // redirect to dashboard after a succesful login
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log("error: " + err));
  };
  render() {
    return (
      <div id="login">
        <h1 className="text-center">Get In</h1>
        <form className="form-signin w-100" onSubmit={this.submitHandler}>
          <label htmlFor="inputEmail">Username</label>
          <div className="form-label-group">
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="someone"
              required={true}
              autoFocus=""
              name="username"
              onChange={this.onChangeHandler}
            />
          </div>

          <div className="form-label-group mt-2">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="********"
              required={true}
              name="password"
              onChange={this.onChangeHandler}
            />
          </div>
          <button
            className="btn btn-lg btn-danger btn-block mt-4"
            type="submit"
          >
            Log in
          </button>
          <p className="mt-3">
            Don't have an account yet?
            <Link to="/signup">Sign up for free</Link>
          </p>
        </form>
      </div>
    );
  }
}
