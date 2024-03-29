const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.send("Welcome to the home page");
});

app.listen(5000, () => {
    console.log("Server is listening ...");
})