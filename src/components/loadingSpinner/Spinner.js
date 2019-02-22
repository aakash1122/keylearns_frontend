import React from "react";
import ReactLoading from "react-loading";

const Spinner = ({ type, color }) => (
  <div className="spinner">
    <ReactLoading type={type} color={color} height={150} width={150} />
  </div>
);

export default Spinner;
