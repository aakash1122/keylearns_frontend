import React, { Component } from "react";
import Usercard from "./Usercard";
import Courses from "./Courses";
import Enrolledcourses from "./EnrolledCourses";

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (this.props.user) {
      return (
        <div className="dashboard">
          <Usercard user={this.props.user} />
          <div className="row">
            <div className="col-6">
              <h3 className="text-center dashHeading">Created</h3>
              <Courses courses={this.props.user.courses} />
            </div>
            <div className="col-6">
              <h3 className="text-center dashHeading">Enrolled</h3>
              <Enrolledcourses courses={this.props.user.enrollments} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
