import React from "react";

export default function Usercard({ user }) {
  return (
    <div className="div container d-flex flex-column">
      <div className="profile-container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="w-100 h-100 user-image p-3"
            />
          </div>
          <div className="col-md-8 profile-info d-flex flex-column justify-content-center">
            <h2>{user.name}</h2>
            <p>Username : {user.username}</p>
            <p>{user.email}</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa
              error, iste expedita magnam incidunt minima officia? A saepe,
            </p>
          </div>
        </div>
      </div>
      <div className="social-links mx-auto mt-2 p-2">
        <span className="fa-stack fa-2x m-2">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-instagram fa-stack-1x fa-inverse" />
        </span>
        <span className="fa-stack fa-2x m-2">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
        </span>
        <span className="fa-stack fa-2x m-2">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
        </span>
      </div>
      <hr />
    </div>
  );
}
