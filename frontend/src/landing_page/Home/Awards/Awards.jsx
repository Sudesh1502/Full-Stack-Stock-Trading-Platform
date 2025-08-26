import React from "react";

function Awards() {
  return (
    <>
      <div className="container  mb-5">
        <div className="row">
          <div className="col-6 p-5 mr-5">
            <img
              style={{ width: "80%" }}
              src="media/images/largestBroker.svg"
              alt="Broker Image"
            />
          </div>
          <div className="col-6 p-5 mt-2">
            <div style={{ width: "100%" }}>
              <h1 className="fs-4">Largest Stock Broker in India</h1>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                2+ million Zerodha clients contribute to over 15% of all retail
                orders volume in India daily by trading and investing in:
              </p>

              {/* two columns in one row */}
              <div className="row">
                <div className="col-6">
                  <ul className="awardUl" style={{ fontSize: "9px" }}>
                    <li>Features and Options</li>
                    <li>Commodity Derivatives</li>
                    <li>Currency Derivatives</li>
                  </ul>
                </div>

                <div className="col-6">
                  <ul className="awardUl" style={{ fontSize: "9px" }}>
                    <li>Stocks and IPO's</li>
                    <li>Direct Mutual Funds</li>
                    <li>Bonds and Government Securities</li>
                  </ul>
                </div>
              </div>

              {/* ✅ separate row for centered image */}
              <div className="row mt-3">
                <div className="text-center">
                  <img
                    src="media/images/pressLogos.png"
                    alt="Press Logos"
                    className="img-fluid"
                    style={{ maxWidth: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
