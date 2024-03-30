const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const router = require("./router/router");
require("dotenv").config();

const port = process.env.PORT || 3000;


app.use(express.static("./3-tasks-API/public"));
app.use(express.json());
app.use("/", router);

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`listen on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
