import React from "react";

export default function Usercard({ user }) {
  return (
    <div className="user-image-card container text-dark">
      <div className="imagebox left">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
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
