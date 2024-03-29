const express = require("express");
const app = express();
const people = require("../data");

// server my static file i.e., index.html and assoc
app.use(express.static("./2-express/methods-public")); // path relative to express file
// parse form data
app.use(express.urlencoded({extended:false}));
app.post("/login", (req, res) => {
    const {name} = req.body;
    console.log(name);
    res.status(201).json({success:true,data:"name"});
});

app.listen(5000, () => {
    console.log("server is listening ...");
});