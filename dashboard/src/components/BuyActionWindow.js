import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import {toast} from 'react-hot-toast'
import { useLoader } from "./LoaderContext";


const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState();
  const {setLoading} = useLoader();

  // ✅ Pull values from context
        
  const { closeBuyWindow, closeSellWindow, isSellWindowOpen} = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      setLoading(true);
      await axios.post("https://full-stack-stock-trading-platform-of8o.onrender.com/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      }, { withCredentials: true });
    } catch (err) {
      console.error("Error placing order:", err);
       toast.error("failed");
    }

    closeBuyWindow();
     toast.success("Product Purchased");
     setLoading(false);
  };

  const handleSellClick = async () => {
    setLoading(true);
    try {
      
      await axios.post("https://full-stack-stock-trading-platform-of8o.onrender.com/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "Sell",
      }, { withCredentials: true });
    } catch (err) {
      console.error("Error placing order:", err);
    }

    closeSellWindow();
    toast.success("Product Selled");
    setLoading(false);
  };

  const handleCancelClick = () => {
    closeBuyWindow();
    closeSellWindow();
     toast.error("Canceled!");
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {!isSellWindowOpen &&<Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>}
          {isSellWindowOpen && <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>}
          
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
