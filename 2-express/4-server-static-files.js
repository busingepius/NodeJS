const express = require("express");
const path = require("path");
const port = 5000;

const app = express();
// set up static middleware
app.use(express.static("./public"));
app.get("/",function(req,res){
    res.status(200).sendFile(path.join(__dirname,"./navbar-app/index.html"));
    // 1. adding to static assets
    // 2. SSR
});

app.all("*",function(req,res){
    res.status(404).send(`<p>Page not found</p>`)
});

app.listen(port,function(){
    console.log(`server is listening...${port}`);
});