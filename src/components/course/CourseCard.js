import React from "react";

export default function CourseCard() {
  return (
    <>
      <div
        className="card text-dark"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <img
          src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">Card title</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make.
          </p>
          <a href="#" className="btn btn-block btn-outline-secondary">
            View Course
          </a>
        </div>
      </div>
    </>
  );
}
