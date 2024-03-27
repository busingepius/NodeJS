const express = require("express");
const {people, products} = require("../data");
const app = express();


app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
});

// NOTE:- Query Strings should come before the one for only parameters i.e., FIRST
app.get("/api/products/query", (req, res) => {
    console.log(req.query);
    res.status(200).json(products);
});

// SECOND
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});

// single parameters
app.get("/api/products/:productID", (req, res) => {
    console.log(req.params);
    const {productID} = req.params;
    let product = products.find((product) => product.id === Number(productID));
    res.status(200).json(product);
});

// Multiple parameters
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    const {productID, reviewID} = req.params;
    console.log(productID, reviewID);
    res.status(200).json(products);
});


app.listen(5000, () => {
    console.log("server is listening");
});