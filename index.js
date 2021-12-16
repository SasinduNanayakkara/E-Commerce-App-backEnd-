const Express = require("express");
const mongoose = require('mongoose');
const app = Express();
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const express = require("express");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection successful")
).catch((err) =>{
    console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);


app.get("/api/test", ()=>{
    console.log("Test successful");
});


app.listen(process.env.PORT || 3500, ()=>{
    console.log("BackEnd Server is Running");
});