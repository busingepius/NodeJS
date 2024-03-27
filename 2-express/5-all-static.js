const express = require("express");
const app = express();

// serve static assets
app.use(express.static("./public"));
app.listen(5000, () => {
    console.log("server is listening on 5000....");
});