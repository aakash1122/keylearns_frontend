import React from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import CourseLoader from "../loadingSpinner/ContentLoader";

export default function PostFeed(props) {
  const info = {
    title: "Courses",
    description: "Learn from anywhere, anytime"
  };
  const courseList = props.courses.map(course => {
    return (
      <Link to={`/course/${course.id}`} key={course.id}>
        <div className="container shadow" id="course-card">
          <div className="row text-dark">
            <div className="col-3 p-0">
              <img
                className="w-100 h-100"
                src="https://cdn-images-1.medium.com/max/1600/1*H3rm-u6SJiL1IoKIE9OTWg.png"
                alt=""
              />
            </div>
            <div className="col-7 p-2">
              <div className="course-info">
                <h5>{course.title.slice(0, 50)}</h5>
                <p className="courseDesc">{course.description.slice(0, 130)}</p>
                <button className="btn btn-outline-danger btn-sm">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-2 price">
              <p className="d-inline">Price : {course.price}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <React.Fragment>
      <Heading info={info} />
      {props.courses.length ? (
        <div className="container d-flex flex-wrap flex-column border-bottom">
          {courseList}
        </div>
      ) : (
        <div className="container">
          <CourseLoader />
        </div>
      )}
    </React.Fragment>
  );
}
