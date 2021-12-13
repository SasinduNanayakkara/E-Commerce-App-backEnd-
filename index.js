const Express = require("express");
const mongoose = require('mongoose');
const app = Express();
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection successful")
).catch((err) =>{
    console.log(err);
});

app.listen(process.env.PORT || 3500, ()=>{
    console.log("BackEnd Server is Running");
});