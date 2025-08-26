import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#FFF",
          borderBottom: "1px solid #E6E6E6",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "25%" }}
              src="media/images/logo.svg"
              alt="Logo"
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="products">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
