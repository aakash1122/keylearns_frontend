import React from "react";
import Usercard from "./Usercard";
import Courses from "./Courses";

export default function Profile({ user }) {
  console.log(user);
  if (user) {
    return (
      <div>
        <Usercard user={user} />
        <h3 className="text-dark course-heading text-center mb-5">
          Courses you have created
        </h3>
        <Courses courses={user.courses} />
      </div>
    );
  } else {
    return null;
  }
}
