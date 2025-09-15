import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path, { replace: true });
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#FFF",
        borderBottom: "1px solid #E6E6E6",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className={`mx-2 my-2`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "200px" }}
            src="media/images/logo.svg"
            alt="Logo"
            
          />
        </Link>

        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="navbarSupportedContent"
        >
          <form
            className="d-flex"
            style={{ justifyContent: "flex-end" }}
            role="search"
          >
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                 replace
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  replace
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                  replace
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/pricing"
                  replace
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/support"
                  replace
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                  replace
                >
                  Signup
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
