import React from "react";
import CourseCard from "./CourseCard";

export default function Courses({ courses }) {
  const courseList = courses.map(course => {
    return <CourseCard course={course} key={`"course.id"${Math.random()}`} />;
  });
  return (
    <div className="d-flex flex-wrap justify-content-center" id="courseWrapper">
      {courseList}
    </div>
  );
}
