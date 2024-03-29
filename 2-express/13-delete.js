const express = require("express");
const app = express();

// parse json
app.use(express.json());

app.delete("/api/people/:personID",(req,res)=>{
    const {personID} = req.params;
    console.log(personID)
    return res.status(203).json({personID});
});

app.listen(5000,()=>{
    console.log("listening");
})