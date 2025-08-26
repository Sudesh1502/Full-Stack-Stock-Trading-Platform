import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Education() {
  return (
    <div className="container mt-2 p-1 ">
      <div className="row  p-3">
        <div className="col-6 align-self-center" >
            <img src="/media/images/education.svg" alt="Education Image" style={{width:"90%"}} />
        </div>
        <div className="col-6 mt-5 p-3" >
          <h1 className="fs-4">Free and open market education</h1>

          <p style={{ fontSize: "11px" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading. A
          </p>

          <a href="" style={{ fontSize: "10px" }}>
            Versity
            <FaLongArrowAltRight />{" "}
          </a>

          <p style={{ fontSize: "11px" , marginTop: "20px" }}>
            TradingQ&A the the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ fontSize: "10px" }}>
            TradingQ&A
            <FaLongArrowAltRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
