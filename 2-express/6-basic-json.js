const express = require("express");
const {people, products} = require("../data");
const app = express();

app.get("/", (req, res) => {
    res.json([{name: "john"}, {name: "smilga"}]);
});
app.get("/data", (req, res) => {
    res.json(products);
});

app.get("/people", (req, res) => {
    res.json(people);
})

app.listen(5000, () => {
    console.log("server is listening");
});