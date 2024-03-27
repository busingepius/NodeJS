const http = require("http");
const {readFileSync} = require("fs");
const homePage = readFileSync("./2-express/content/index.html");
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(homePage);
        res.end();
    }else if(req.url === '/about'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`<h1>here is about page </h1>`);
        res.end();
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`<p>Ooops the file does not exit</p>`);
        res.end();
    }
});

server.listen(5000);