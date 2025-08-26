import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Stats() {
  return (
    <div className="container text-center p-4 ml-5" style={{marginLeft:"50px"}}>
      <div className="row">
        <div className="col-6 text-start" >
            <div style={{width:"80%"}}>
          <h1 className="fs-4">Trust with confidence</h1>

          <h2 className="fs-6 mt-4" >Customer-first always</h2>
          <p style={{fontSize: "11px"}}>
            That's why 1,3+ crore customers trust Zerodha with 3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-6" >No spam or gimmicks</h2>
          <p style={{fontSize: "11px"}}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-6" >The Zerodha universeconco</h2>
          <p style={{fontSize: "11px"}}>
            Not just an app, but a whole ecosystem. Our investments in
            30-fintech startups offer you tailored services specific to your
            needs.
          </p>

          <h2 className="fs-6" >Do better with money</h2>
          <p style={{fontSize: "11px"}}>
            With initiatives like Nudge and Kill Switch we don't just facilitate
            transactions, but actively help you do better with your money
          </p>
          </div>
        </div>




        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "80%" }}
            alt="Ecosystem Image"
          />

          <div className="text-center fs-6">
            <a href="" className="mx-5" style={{fontSize:"10px"}}>Try our Products
<FaLongArrowAltRight /> </a>

            <a href="" style={{fontSize:"10px"}}>Try KITE demo
<FaLongArrowAltRight /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
