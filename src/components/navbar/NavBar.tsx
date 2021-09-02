import React from "react";
import { Menu } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import "../../styles/App.css";

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow primary-color">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Earthquake Finder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <Link
            to="/"
            className={`btn ${
              location.pathname === "/" ? "btn-light" : "btn-outline-light"
            } mx-1 rounded`}
            type="submit"
          >
            Home
          </Link>
          <Link
            to="/Events"
            className={`btn ${
              location.pathname === "/Events"
                ? "btn-light"
                : "btn-outline-light"
            } mx-1 rounded`}
            type="submit"
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
