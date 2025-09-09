const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const HoldingsModel = require('./Models/HoldingsModel');
const PositionsModel = require('./Models/PostionsModel');
const OrdersModel = require('./Models/OrdersModel');
const UserModel = require("./Models/UserModel");
const jwtAuth = require("./middlewares/jwtAuth");
const cookieParser = require('cookie-parser');
const app = express();


//middlewares

app.use(cors({
  origin: (origin, callback) => {
    callback(null, origin); // reflect the request origin
  },
  credentials: true
}));

app.use(bodyParser.json());

app.use(cookieParser()); 
const port = process.env.PORT || 3002
const dbUrl = process.env.MONGO_URL;
const key = process.env.SECRET_KEY;


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


app.get("/allHoldings", jwtAuth , async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
})

app.get("/allPositions", jwtAuth, async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
})

app.get("/allOrders", jwtAuth, async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
})

app.post("/signUp", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser && existingUser.password === password) {
      const token = jwt.sign({
        userId: existingUser._id,
        email: existingUser.email,
      },
        key,
        {
          expiresIn: "4h"
        })

        res.cookie("authToken", token, {
      httpOnly: true,
      secure: false, // set true if using https
      sameSite: "lax"
    });
      return res.status(200).json({ message: "Login Successful !"});
    } else {
      return res.status(400).send({ message: "Invalid credentials" });
    }

  } catch (error) {
    res.send({ message: "Something went wrong!!, " + error.message });
  }
})

app.post("/signIn", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.send({ message: "Email Already Exists" });
    }

    await UserModel.create({ name, email, password });

    res.status(201).send({ message: "User Registered Successfully!" });
  } catch (error) {
    res.send({ message: "Something went wrong!!, " + error.message });
  }


})

app.post("/newOrders", jwtAuth,  async (req, res) => {
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