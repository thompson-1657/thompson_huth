import React from "react";
import { useLocation } from "react-router";

export const Whoops404 = () => {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
};

export default Whoops404;
