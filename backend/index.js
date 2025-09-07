const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const  HoldingsModel  = require('./Models/HoldingsModel');
const  PositionsModel  = require('./Models/PostionsModel'); 
const  OrdersModel  = require('./Models/OrdersModel'); 
const { pre } = require("./Schema/HoldingsSchema");

const app = express();


//middlewares
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 3002
const dbUrl = process.env.MONGO_URL;


// dummy dat adding
// app.get("/addPositions", async (req, res) => {
//     const temp = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//     temp.forEach((temp) => {
//         let newData = new PositionsModel({
//             product: temp.product,
//             name: temp.name,
//             qty: temp.qty,
//             avg: temp.avg,
//             price: temp.price,
//             net: temp.net,
//             day: temp.day,
//             isLoss: temp.isLoss,
//         })
//         newData.save()
//     })

//     res.send("Dummy temp-data Added");
// })


app.get("/allHoldings", async (req,res)=>{
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
})

app.get("/allPositions", async (req,res)=>{
    const positions = await PositionsModel.find({});
    res.json(positions);
})

app.post("/newOrders", async (req,res)=>{
    const { name, qty, price, mode } = req.body;

    // 1. Save order
    await OrdersModel.create({ name, qty, price, mode });

    // 2. Always add a new entry in holdings if BUY
    if (mode === "BUY") {
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "+0.00%", // default for now
        day: "+0.00%", // default for now
      });
    }

    res.send("Order Purchased");
})


app.listen(port, () => {
    console.log("Sever is listening on port 3002");
    mongoose.connect(dbUrl)
    console.log("DB Connected");
})