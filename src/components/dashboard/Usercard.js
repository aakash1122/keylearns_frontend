import React from "react";

export default function Usercard({ user }) {
  console.log(user);
  return (
    <div className="user-image-card container text-dark">
      <div className="imagebox left">
        <img
          src={`https://keylearns.herokuapp.com${user.image.url}`}
          alt="UserImage"
          className="userImage"
        />
      </div>
      <div className="userinfo right">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>Username: {user.name}</p>
      </div>
    </div>
  );
}
