import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
// component
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/singup/Signup";
import AddCourse from "./components/course/AddCourse";
import CourseFeed from "./components/course/CourseFeed";

class App extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    axios
      .get("https://keylearns.herokuapp.com/courses")
      .then(data => {
        this.setState(
          {
            courses: data.data.courses
          },
          () => console.log("state updated", this.state)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/addcourse" component={AddCourse} />
            <Route
              exact
              path="/courses"
              render={() => <CourseFeed courses={this.state.courses} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
