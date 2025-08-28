import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { GiCrownCoin } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";

function RaiseTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <FaCirclePlus/> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Resident individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Minor
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Non Resident Indian (NRI)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Glossory
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <MdAccountCircle/> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Client Master Report (CMR) and Depositary Participants (DP)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of securities
          </a>
          <br />
          
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <FaCoins/> Kite
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO's
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQ's
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin Trading Facilities (MTF) and Margins
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts and Orders
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Alerts and Nudges
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
          <br />
          
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <IoBarChartSharp/> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw Money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Bank Accounts
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </a>
          <br />
          
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <TbCircleDashed/> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            PortFolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate Actions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Statements
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Segments
          </a>
          <br />
          
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="" style={{fontSize:"18px"}}>
            <GiCrownCoin/> Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual Funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nations Pension Scheme
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fixed Deposite (FD)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Features on Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Payment and Order
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
          <br />
          
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;