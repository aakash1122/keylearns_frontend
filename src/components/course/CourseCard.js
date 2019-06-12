import React from "react";

export default function CourseCard() {
  return (
    <>
      <div
        className="card text-dark border-0 shadow-sm"
        data-aos="zoom-in-down"
        data-aos-anchor-placement="center-bottom"
      >
        <img
          src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">
            <b>Course Title</b>
          </h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui
            fugit, officiis ipsum enim eligendi.
          </p>
          <h6 className="mb-3">
            <b>Price : 666</b>
          </h6>
          <a href="#" className="btn btn-block btn-outline-secondary">
            View Course
          </a>
        </div>
      </div>
    </>
  );
}
