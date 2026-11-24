import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="empty-state error-page">
      <span className="error-code">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <NavLink className="primary-button" to="/">Go back home</NavLink>
    </section>
  );
};

export default ErrorPage;
