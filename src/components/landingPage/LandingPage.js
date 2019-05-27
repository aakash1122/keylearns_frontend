import React from "react";
import Typist from "react-typist";
import "../../../node_modules/react-typist/dist/Typist.css";
import Login from "../login/Login";

export default function LandingPage(props) {
  return (
    <div>
      <div id="landingPage">
        <div className="container-fluid row hero">
          <div className="col-md left d-flex justify-content-center align-items-center">
            {/* <Typist
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: false,
                hideWhenDoneDelay: 1000
              }}
            >
              <Typist.Delay ms={1500} />
              <h1 className="d-inline">
                Welcome to
                <span className="keylearns"> KeyLearns</span>
              </h1>
              <br />
              <Typist.Delay ms={1000} />
              <h4>Courses of your need</h4>
            </Typist> */}
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
        <section className="offering text-dark pt-5">
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
                    <h3>Courses On Trending Technologies</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i className="fas fa-swatchbook fa-3x" />
                    <h3>Rich Library & Qualityful Content</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i class="fas fa-3x fa-users" />
                    <h3>Community Support</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3">
                <div className="card">
                  <div className="card-body text-center">
                    <i class="fas fa-3x fa-desktop" />
                    <h3>LifeTime Access</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bangla p-5 mt-5">
          <h2 className="text-center">All the courses are in Bangla </h2>
        </section>
      </div>
    </div>
  );
}
