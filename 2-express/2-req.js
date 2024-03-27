const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<h1>Welcome to home page</h1>`);
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<h1>this is the about page</h1>`);
        res.end();
    } else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write(`<h1>Oops page not found</h1>`);
        res.end();
    }
});

server.listen(5000, () => {
    console.log("server is listening on port 5000");
});