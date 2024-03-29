const express = require("express");
const app = express();
const router = require("./14-router");

app.use(express.json());
app.use("/",router);
app.listen(5000,()=>{
    console.log("listening...");
});