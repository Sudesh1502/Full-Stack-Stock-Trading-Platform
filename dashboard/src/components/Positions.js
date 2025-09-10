import React from "react";
// import { positions } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Positions = () => {

  const [allPositions, setAllpositions] = useState([]);
  
  const [error, setError] = useState("");
   useEffect(() => {
    const fetchPositions = async () => {
     

      try {
        const response = await axios.get("https://full-stack-stock-trading-platform-of8o.onrender.com/allPositions",{
    withCredentials: true
  });

  if(response.data.message == "Unauthorized access!"){
        window.location.href="http://localhost:5173/signup"
        setAllpositions([]); 
      }else{
        setAllpositions(response.data); 
      }
// assuming backend returns an array
      } catch (err) {
        setError("Failed to fetch positions");
      }
    };

    fetchPositions();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const currValue = (stock.price * stock.qty)
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{(stock.qty.toFixed(2))}</td>
                <td>{(stock.avg.toFixed(2))}</td>
                <td>{(stock.price.toFixed(2))}</td>
                <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
