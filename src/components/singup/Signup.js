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
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[image]", this.state.userImage);
    formData.append("user[email]", this.state.email);
    formData.append("user[username]", this.state.username);
    formData.append("user[name]", this.state.name);
    formData.append("user[password]", this.state.password);

    axios
      .post("https://keylearns.herokuapp.com/register/", formData)
      .then(data => console.log(data))
      .catch(err => console.log("error: " + err));
  };

  fileChangeHandler = e => {
    if (e.target.files[0].size > 1048576) {
      this.setState({
        ...this.state,
        error: "File size is larger than 1Mb"
      });
    } else {
      this.setState({
        ...this.state,
        userImage: e.target.files[0],
        error: ""
      });
    }
    console.log(e.target.files[0].size);
  };

  render() {
    return (
      <div id="signupForm">
        <div className="container text-dark">
          <h2 className="text-center">Few Steps to get you started</h2>
          <hr className="w-25 mb-5" />
          <form
            className="form-signin w-100"
            encType="multipart/form-data"
            onSubmit={this.submitHandler}
          >
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
            <label htmlFor="exampleFormControlFile1">
              Upload a profile picture
            </label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              name="userImage"
              accept="image/png, image/jpeg"
              size="1000000"
              onChange={this.fileChangeHandler}
            />
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
