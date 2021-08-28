import React from "react";
import wedding from "../../images/wedding.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import BrideGroomNames from "../../components/BrideGroomNames";
import "./style.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <BrideGroomNames bride="Lisa" groom="Joe" />
        <div className="col-8">
          <img src={wedding} alt="wedding" className="wedding-pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
