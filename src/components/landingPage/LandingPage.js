import React from "react";
import Login from "../login/Login";
import CourseCard from "../course/CourseCard";

export default function LandingPage(props) {
  let popCourse = {
    color: "#73746b"
  };
  return (
    <div>
      <div id="landingPage">
        <div className="container-fluid row hero">
          <div className="col-md left d-flex justify-content-center align-items-center">
            <div className="hero-text">
              <h1>
                Welcome to <b>KeyLearns</b>
              </h1>
              <p>
                Learn Anywher <span> | </span> Learn anytime
              </p>
              <button className="btn btn-danger btn-lg mt-2">
                Explore courses
              </button>
              <button className="btn btn-danger btn-lg mt-2" id="join-btn">
                Join Now
              </button>
            </div>
          </div>
          <div className="col-md right d-flex justify-content-center align-items-center">
            {/* login component */}
            <Login sendToken={props.sendToken} history={props.history} />
          </div>
        </div>
        {/* offer section */}
        <section className="offering text-dark pt-5 pb-5">
          <h1 className="text-center mb-5 mt-2">
            <span className="slash">//</span> What's in the box ?{" "}
            <span className="slash">//</span>
          </h1>
          <div className="container mt-3">
            <div className="row">
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-globe-americas fa-3x" />
                    <h3>Varity Of Trending Fresh Courses</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-3x fa-chalkboard-teacher" />
                    <h3>Expert Instructors</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-3x fa-users" />
                    <h3>Community Support</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-3x fa-desktop" />
                    <h3>LifeTime Access</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 p-3">
                <div className="card">
                  <div className="card-body text-center offering-bangla">
                    <h2>All The Courses Are In Bangla</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="suggestion text-dark text-center" id="suggestion">
          <h3 style={popCourse}>popular Courses</h3>
          <div className="suggested-courses d-flex flex-md-row justify-content-center flex-wrap mt-5 p-3">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <button className="btn btn-danger btn-lg mt-2 mb-5" id="join-btn">
            Browse More
          </button>
        </div>
      </div>
    </div>
  );
}
