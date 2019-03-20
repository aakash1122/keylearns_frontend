import React from "react";
import Typist from "react-typist";
import "../../../node_modules/react-typist/dist/Typist.css";
import Login from "../login/Login";

export default function LandingPage(props) {
  return (
    <div>
      <div id="landingPage">
        <div className="container-fluid row text-center hero">
          <div className="col-md left d-flex justify-content-center align-items-center">
            <Typist
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
            </Typist>
          </div>
          <div className="col-md right d-flex justify-content-center align-items-center">
            {/* login component */}
            <Login sendToken={props.sendToken} history={props.history} />
          </div>
        </div>
        <section className="offering text-dark">
          <h1 className="text-center mb-5 mt-2">We are Offering</h1>
          <div className="container">
            <div className="row  text-center">
              <div className="col-md-4">
                <div className="d-flex flex-column offer">
                  <i className="fas fa-globe-americas fa-3x" />
                  <h3 className="mb-2">Courses on trending technologies</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, consequatur voluptas itaque officiis non voluptate
                    possimus dolore et distinctio vel harum laborum odio ab iure
                    quod.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column offer">
                  <i className="fas fa-swatchbook fa-3x" />
                  <h3>Rich Library</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, consequatur voluptas itaque officiis non voluptate
                    possimus dolore et distinctio vel harum laborum odio ab iure
                    quod.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column offer">
                  <i className="fas fa-chalkboard-teacher fa-3x" />
                  <h3>Community support</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, consequatur voluptas itaque officiis non voluptate
                    possimus dolore et distinctio vel harum laborum odio ab iure
                    quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bangla p-5 mt-5">
          <h2 className="text-center">All the courses are in Bangla</h2>
        </section>
      </div>
    </div>
  );
}
