import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// component
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/singup/Signup";
import AddCourse from "./components/course/AddCourse";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/addcourse" component={AddCourse} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
