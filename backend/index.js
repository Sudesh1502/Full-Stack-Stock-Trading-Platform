const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const router = require("./routes/Routes.js");
const app = express();

const port = process.env.PORT || 3002
const dbUrl = process.env.MONGO_URL;

app.use(cors({
  origin: (origin, callback) => {
    callback(null, origin|| true);
  },
  credentials: true
}));

app.use(bodyParser.json());

app.use(cookieParser());

app.use("/", router);


app.listen(port, () => {
  console.log("Sever is listening on port 3002");
  mongoose.connect(dbUrl)
  console.log("DB Connected");
})


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





// app.get("/allOrders", jwtAuth, async (req, res) => {
//   const orders = await OrdersModel.find({});
//   res.json(orders);
// }


