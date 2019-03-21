import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/courses">Courses</Link>
              {props.loggedIn ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/addcourse">Add Course</Link>
                  <Link to="/logout" onClick={props.logout}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
