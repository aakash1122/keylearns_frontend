import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  submitHandler = e => {
    const User = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    e.preventDefault();
    axios
      .post(
        "https://keylearns.herokuapp.com/users",
        { user: User },
        {
          withCredentials: false
        }
      )
      .then(data => console.log(data))
      .catch(err => console.log("error: " + err));
  };

  render() {
    return (
      <div id="signupForm">
        <div className="container text-dark">
          <h2 className="text-center">Few Steps to get you started</h2>
          <hr className="w-25 mb-5" />
          <form className="form-signin w-100" onSubmit={this.submitHandler}>
            <div className="form-label-group mt-3">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required={true}
                autoFocus=""
                name="email"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-label-group mt-3">
              <input
                type="text"
                id="inputname"
                className="form-control"
                placeholder="Name"
                required={true}
                autoFocus=""
                name="name"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-label-group mt-3">
              <input
                type="text"
                id="inputUsername"
                className="form-control"
                placeholder="User Name"
                required={true}
                autoFocus=""
                name="username"
                onChange={this.onChangeHandler}
              />
            </div>

            <div className="form-label-group mt-3 mb-3">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required={true}
                name="password"
                onChange={this.onChangeHandler}
              />
            </div>
            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Sign Up
            </button>
            {this.state.error ? (
              <div className="alert alert-danger mt-2" role="alert">
                {this.state.error}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}
