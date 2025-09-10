import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu]=useState(0);
  const[isMenuDropDownOpen, setIsMenuDropDownOpen]=useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleDropDownClick = () => {
    setIsMenuDropDownOpen(!isMenuDropDownOpen);
  }

  const handleLogout = async () => {
    try {
      await axios.post("https://full-stack-stock-trading-platform-of8o.onrender.com/logout", {}, { withCredentials: true });
      // redirect to login page
      window.location.href = "http://localhost:5173/signUp";;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const ActiveClassMenu = "menu selected";
  const ClassMenu = "menu";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>{handleMenuClick(0)}}><p className={selectedMenu === 0 ? ActiveClassMenu : ClassMenu} >Dashboard</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>{handleMenuClick(1)}}><p className={selectedMenu === 1 ? ActiveClassMenu : ClassMenu} >Orders</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{handleMenuClick(2)}}><p className={selectedMenu === 2 ? ActiveClassMenu : ClassMenu} >Holdings</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{handleMenuClick(3)}}><p className={selectedMenu === 3? ActiveClassMenu : ClassMenu} >Positions</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{handleMenuClick(4)}}><p className={selectedMenu === 4 ? ActiveClassMenu : ClassMenu} >Funds</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>{handleMenuClick(5)}}><p className={selectedMenu === 5 ? ActiveClassMenu : ClassMenu} >Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleDropDownClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {isMenuDropDownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
