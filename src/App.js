import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
// components
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/singup/Signup";
import AddCourse from "./components/course/AddCourse";
import CourseFeed from "./components/course/CourseFeed";
import Dashboard from "./components/dashboard/Dashboard";
import courseDetail from "./components/course/courseDetail";

class App extends Component {
  state = {
    courses: [],
    currentUser: null,
    loggedIn: false,
    token: null
  };

  componentDidMount() {
    // checking if a session is going on
    if (localStorage.getItem("csrf")) {
      this.setState({
        loggedIn: true,
        token: localStorage.getItem("csrf")
      });
    }
  }

  getCurrentUser = () => {
    console.log("Bearer " + this.state.token);
    axios
      .get("https://keylearns.herokuapp.com/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.token
        }
      })
      .then(data =>
        this.setState(
          {
            currentUser: data.data.user
          },
          () => console.log("current user : " + this.state.currentUser)
        )
      )
      .catch(err => console.log(err));
  };

  setToken = token => {
    console.log("token : " + token);
    localStorage.setItem("csrf", token);
    this.setState({
      loggedIn: true,
      token: localStorage.getItem("csrf", token)
    });
  };

  logout = () => {
    localStorage.removeItem("csrf");
    this.setState(
      {
        token: null,
        loggedIn: false,
        currentUser: null
      },
      () => {
        window.location.replace("/");
      }
    );
  };

  getAllCourses = () => {
    axios
      .get("https://keylearns.herokuapp.com/courses")
      .then(data => {
        this.setState({
          courses: data.data.courses
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <LandingPage {...props} sendToken={this.setToken} />
                )}
              />
              <Route path="/signup" component={Signup} />
              <Route path="/addcourse" component={AddCourse} />
              <Route path="/course/:id" component={courseDetail} />
              <Route
                exact
                path="/courses"
                render={() => (
                  <CourseFeed
                    courses={this.state.courses}
                    getAllCourses={this.getAllCourses}
                  />
                )}
              />
              <Route
                exact
                path="/dashboard"
                render={() => (
                  <Dashboard
                    getUser={this.getCurrentUser}
                    user={this.state.currentUser}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
