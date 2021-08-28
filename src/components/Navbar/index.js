import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Initials from "../Initials";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <Initials initials="L & J" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/how" className="nav-link active" aria-current="page">
                  How we met
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="ideas"
                  className="nav-link active"
                  aria-current="page"
                >
                  Destination ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="countdown"
                  className="nav-link active"
                  aria-current="page"
                >
                  Countdown to the day
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
