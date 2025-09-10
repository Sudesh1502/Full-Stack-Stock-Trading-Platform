import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("https://full-stack-stock-trading-platform-of8o.onrender.com/allOrders", { withCredentials: true }).then(res => {
      if(res.data.message == "Unauthorized access!"){
        setAllOrders([]);
        window.location.href="https://full-stack-stock-trading-platform-landing.onrender.com/signup"
        
      } else{
        setAllOrders(res.data);
      }
      
    })
  }, [])
  return (
    <div className="orders">
      {!allOrders && <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>}
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>LTP</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>

            {allOrders?.map((stock, index) => {


              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{(stock.qty.toFixed(2))}</td>
                  <td>{(stock.price.toFixed(2))}</td>
                  <td>{stock.mode}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>



    </div>

  );
};

export default Orders;
