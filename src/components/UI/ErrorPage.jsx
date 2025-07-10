import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1
        style={{
          color: "white",
          fontSize: "40px",
          display: "grid",
          placeItems: "center",
          marginTop:"50px",
          textTransform:"uppercase"
        }}
      >
        Oops! An error is occured
      </h1>
      <NavLink style={{display:"grid", placeItems:"center"}}>
        <button >Go Back</button>
      </NavLink>
    </>
  );
};

export default ErrorPage;
