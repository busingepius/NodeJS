const express = require("express");
const app = express();
const {people} = require("../data");

// serve static assets
app.use(express.static("./2-express/methods-public"));
// parse json data from js
app.use(express.json());

app.get("/api/people", (req, res) => {
    res.status(200).json({data: people});
});
app.post("/api/people", (req, res) => {
    const {name} = req.body;
    const person = name;
    res.status(201).json({ person});
})

app.listen(5000, () => {
    console.log("listening...");
});