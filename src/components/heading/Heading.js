import React from "react";

export default function Heading(props) {
  console.log(props.info);
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">{props.info.title}</h1>
          <p className="lead">{props.info.description}</p>
        </div>
      </div>
    </div>
  );
}
