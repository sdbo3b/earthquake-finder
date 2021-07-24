import React, { useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import "../../styles/App.css";

const NavBar: React.FC = () => {
  const [route, setRoute] = useState("/");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow primary-color">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={() => setRoute("/")}>
          Earthquakes
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
            onClick={() => setRoute("/")}
            to="/"
            className={`btn ${
              route === "/" ? "btn-light" : "btn-outline-light"
            } mx-1 rounded`}
            type="submit"
          >
            Home
          </Link>
          <Link
            onClick={() => setRoute("/Events")}
            to="/Events"
            className={`btn ${
              route === "/Events" ? "btn-light" : "btn-outline-light"
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
