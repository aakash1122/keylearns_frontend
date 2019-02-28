import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="course-card m-2">
      <img
        src="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        alt=""
        className="course-card-image"
      />
      <div className="course-info">
        <p className="text-light ">{course.title}</p>
      </div>
    </div>
  );
}
