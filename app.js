const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log("asking for this resourse");
    res.status(200).send("Visiting the home page");
});

app.get("/about", function (req, res) {
    res.status(200).send("this is the about page");
});

app.all("*", function (req , res) {
    res.status(404).send(`<h1>The page was not found</h1>`);
});

app.listen(5000, function () {
    console.log("The server is listening on port");
});