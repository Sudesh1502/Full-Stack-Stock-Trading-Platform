const OrdersModel = require("../Models/OrdersModel");
const PositionsModel = require("../Models/PostionsModel.js");
const HoldingsModel = require("../Models/HoldingsModel");
const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const key = process.env.SECRET_KEY;


class Controller {
    static async allOrders(req, res) {
        const orders = await OrdersModel.find({});
        res.json(orders);
    }

    static async allPositions(req, res) {
        const positions = await PositionsModel.find({});
        res.json(positions);
    }


    static async allHoldings(req, res) {
        const holdings = await HoldingsModel.find({});
        res.json(holdings);
    }


    static async newOrders(req, res) {
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
    }


    static async signUp(req, res) {
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
                return res.status(200).json({ message: "Login Successful !" });
            } else {
                return res.status(400).send({ message: "Invalid credentials" });
            }

        } catch (error) {
            res.send({ message: "Something went wrong!!, " + error.message });
        }
    }


    static async signIn(req, res) {
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


    }


    static async logout(req, res) {
        res.clearCookie("authToken", {
            httpOnly: true,
            secure: false, // set true in production (HTTPS)
            sameSite: "lax"
        });
        res.json({ message: "Logged out successfully" });
    }
}

module.exports = Controller;