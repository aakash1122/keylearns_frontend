import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            KeyLearns
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/courses" activeClassName="active">
                Courses
              </NavLink>
              {props.loggedIn ? (
                <>
                  <NavLink to="/dashboard" activeClassName="active">
                    Dashboard
                  </NavLink>
                  <NavLink to="/addcourse" activeClassName="active">
                    Add Course
                  </NavLink>
                  <NavLink
                    to="/logout"
                    activeClassName="active"
                    onClick={props.logout}
                  >
                    Log out
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/signup" activeClassName="active">
                    Signup
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
