import React from "react";

export const BrideGroomNames = (props) => {
  return (
    <div className="col-4 main-names">
      <p className="lisa">{props.bride}</p>
      <p className="joe">& {props.groom}</p>
    </div>
  );
};

export default BrideGroomNames;
