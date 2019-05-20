import React, { Component } from "react";
import axios from "axios";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class AddPost extends Component {
  state = {
    title: "",
    description: "",
    featuredImage: null,
    tags: [],
    requirements: null,
    price: null,
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
    const initialCourse = {
      title: this.state.title,
      description: {
        courseInfo: this.state.courseDetail,
        courseRequirements: this.state.requirements
      },
      price: this.state.price,
      featuredImage: this.state.featuredImage,
      tags: this.state.tags
    };
    console.log(initialCourse);

    const formData = new FormData();
    formData.append("price", this.state.price);
    formData.append("title", this.state.title);
    formData.append("courseDetail", this.state.courseDetail);
    formData.append("featuredImage", this.state.featuredImage);

    axios
      .post(
        "https://keylearns.herokuapp.com/courses",
        {
          course: initialCourse
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.csrf
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // tags input methods
  handleDelete = i => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  };

  handleAddition = tag => {
    if (this.state.tags.length <= 4) {
      this.setState(state => ({ tags: [...state.tags, tag] }));
    }
  };

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  };

  fileChangeHandler = e => {
    this.setState(
      {
        featuredImage: e.target.files[0]
      },
      () => {
        console.log("updated : ", this.state);
      }
    );
  };

  render() {
    const { tags } = this.state;
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
                name="description"
                onChange={this.onChangeHandler}
                placeholder="Short description about this course ..."
              />
            </div>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Requirements"
              required={true}
              autoFocus=""
              name="requirements"
              minLength={10}
              maxLength={100}
              onChange={this.onChangeHandler}
            />
            {/*Tags */}
            <div className="mt-3">
              <h6 className="text-dark">Add Tags (max: 5) </h6>
              <ReactTags
                tags={tags}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                handleDrag={this.handleDrag}
                delimiters={delimiters}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control mt-3 w-25"
                placeholder="Price "
                required={true}
                autoFocus=""
                name="price"
                minLength={3}
                maxLength={5}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* thumbnile and content */}
            <div className="file-upload-section mt-5 mb-5">
              <label htmlFor="exampleFormControlFile1" className="text-dark">
                Upload a thumbnail for your course
              </label>
              <input
                type="file"
                className="form-control-file text-dark"
                id="exampleFormControlFile1"
                name="featuredImage"
                accept="image/png, image/jpeg, image/jpg"
                size={1000000}
                onChange={this.fileChangeHandler}
              />
            </div>
            <button
              className="btn btn-lg btn-primary btn-block mt-4 mb-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
