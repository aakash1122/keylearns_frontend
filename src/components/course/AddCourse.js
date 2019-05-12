import React, { Component } from "react";
import axios from "axios";

export default class AddPost extends Component {
  state = {
    title: "",
    courseDetail: "",
    thumbnail: null,
    error: ""
  };

  componentWillMount() {
    // send back to homepage if unauthorized
    if (!localStorage.getItem("csrf")) {
      this.props.history.push("/");
    }
  }

  submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thumbnail", this.state.thumbnail);
    formData.append("title", this.state.title);
    formData.append("courseDetail", this.state.postDetail);
    if (!this.state.error) {
      axios
        .post("http://localhost:5000/post/new", formData, {
          withCredentials: true
        })
        .then(post => {
          console.log(post);
          this.props.history.push("/posts");
        })
        .catch(err => console.log(err));
    }
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // fileChangeHandler = e => {
  //   if (e.target.files[0].size > 1048576) {
  //     this.setState({
  //       ...this.state,
  //       error: "File size is larger than 1Mb"
  //     });
  //   } else {
  //     this.setState(
  //       {
  //         postImage: e.target.files[0],
  //         error: ""
  //       },
  //       () => {
  //         console.log("updated : ", this.state);
  //       }
  //     );
  //   }
  //   console.log(e.target.files[0].size);
  // };

  render() {
    return (
      <div className="container">
        <div className="p-fixed mt-5">
          <h2 className="text-center text-dark">Add a brand new Course</h2>
          <hr className="w-25" />
          <form
            className="form-signin"
            encType="multipart/form-data"
            onSubmit={this.submitHandler}
          >
            <div className="form-label-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title goes here"
                required={true}
                autoFocus=""
                name="title"
                minLength={20}
                maxLength={80}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                rows="12"
                cols="20"
                name="postDetail"
                onChange={this.onChangeHandler}
                placeholder="Short description about this course ..."
              />
            </div>
            {/*Programming Language names */}
            <h5 className="text-dark mt-5">Languages / Tools</h5>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: HTML"
                  required={true}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Javascript"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: IOS"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Requirements"
              required={true}
              autoFocus=""
              name="title"
              minLength={10}
              maxLength={100}
              onChange={this.onChangeHandler}
            />
            {/* thumbnile and content */}
            <div className="file-upload-section mt-5 mb-5">
              <label htmlFor="exampleFormControlFile1" className="text-dark">
                Upload a thumbnail for your course
              </label>
              <input
                type="file"
                className="form-control-file text-dark"
                id="exampleFormControlFile1"
                name="postImage"
                accept="image/png, image/jpeg, image/jpg"
                size={1000000}
                onChange={this.fileChangeHandler}
              />
            </div>
            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    );
  }
}
