const http = require("http");
const PORT = 5000;

const server = http.createServer((req,res)=>{
    res.end("Welcome to my page");
});

server.listen(PORT,(PORT)=>{
    console.log(`server is listening on ${PORT}`);
});