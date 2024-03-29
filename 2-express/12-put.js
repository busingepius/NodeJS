const express = require("express");
const app = express();

// parse json
app.use(express.json());

app.put("/api/people/:personID", (req, res) => {
    const {personID} = req.params;
    const {name} = req.body;
    console.log(personID, name);
    res.json({name, personID});
})
app.listen(5000, () => {
    console.log("listening...")
})