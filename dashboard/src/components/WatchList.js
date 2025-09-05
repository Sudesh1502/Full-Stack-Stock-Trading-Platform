import React, { useState } from "react";
import {Tooltip, Grow} from "@mui/material";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import {watchlist} from "../data/data";




const WatchListItem = ({stock}) => {
  return (
    
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percentage">
            {stock.percent}
          </span>
          {stock.isDown ? <KeyboardArrowDown className="down"/> : <KeyboardArrowUp className="up"/>}
          <span className="price">{(stock.price).toFixed(2)}</span>
        </div>

      </div>

    
  );
}


const WatchListActions = ({uid}) => {
  return (
    <span className="actions">
      <span style={{display:"flex", gap:"10px", justifyContent:"center", alignItems:"center"}}>
        <Tooltip
        title="Buy (B)"
        placement="top"
        TransitionComponent={Grow}
        arrow
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
        title="Sell (s)"
        placement="top"
        TransitionComponent={Grow}
        arrow
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
        title="Analytics (A)"
        placement="top"
        TransitionComponent={Grow}
        arrow
        >
          <button className="action"><BarChartOutlined className="icon"/></button>
        </Tooltip>

        <Tooltip
        title="More"
        placement="top"
        TransitionComponent={Grow}
        arrow
        >
          <button className="action"><MoreHoriz  className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  );
}
const WatchList = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const handleMouseEter = () => {
    setMouseHover(true);
  }

  const handleMouseLeave = () => {
    setMouseHover(false);
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul style={{paddingLeft:"0"}}className="list">
      {watchlist.map((stock, index)=>{
        return (<li onMouseEnter={handleMouseEter} onMouseLeave={handleMouseLeave}><WatchListItem  stock={stock} key={index}/>
        {mouseHover && <WatchListActions uid={index}/>}
        </li>);
      })}
      </ul>
    </div>
  );
};

export default WatchList;
