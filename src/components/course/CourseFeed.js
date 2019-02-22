import React from "react";
import Heading from "../heading/Heading";
import Spinner from "../loadingSpinner/Spinner";

export default function PostFeed({ courses }) {
  const info = {
    title: "Courses",
    description: "Learn from anywhere, anytime"
  };
  const courseList = courses.map(course => {
    return (
      <div className="container" id="course-card" key={course.id}>
        <div className="row text-dark">
          <div className="col-4 p-0">
            <img
              className="w-100 h-100"
              src="https://cdn-images-1.medium.com/max/1600/1*H3rm-u6SJiL1IoKIE9OTWg.png"
              alt=""
            />
          </div>
          <div className="col-8">
            <div className="course-info p-3">
              <h3>{course.title.slice(0, 50)}</h3>
              <p>{course.description.slice(0, 80)}</p>
              <h4>Price : {course.price}</h4>
              <p>updated at : {course.updated_at}</p>
              <button className="btn btn-outline-danger btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  console.log(courseList.length);
  return (
    <React.Fragment>
      <Heading info={info} />
      {courses.length ? (
        <div className="container d-flex flex-wrap flex-column">
          {courseList}
        </div>
      ) : (
        <Spinner type="bars" color="#ff4757" />
      )}
    </React.Fragment>
  );
}
