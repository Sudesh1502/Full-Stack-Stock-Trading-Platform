import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Pricing() {
  return (
    <div className="container mt-5 p-5 ">
      <div className="row mt-5 p-3">
        <div className="col-4">
          <h1 className="fs-4">Unbeatable Pricing</h1>

          <p style={{ fontSize: "11px" }}>
            we pioneered the concept of discount broking and price transperency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="" style={{ fontSize: "10px" }}>
            Try KITE demo
            <FaLongArrowAltRight />{" "}
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 border p-2 text-center">
              <h1 className="mt-3 fs-4">₹0</h1>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Free enquity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6 border p-2 text-center">
              <h1 className="mt-3 fs-4">₹20</h1>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
