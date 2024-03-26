const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello this is the HTTP module");
//     res.end();
// });
 
/////////////////////////////////////////////////////////////////////////
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("Know about us");
    } else {
        res.end(`
        <h1>Oooops!</h1>
        <p>We can't seem to find you requested page</p>
        <a href="/">back home</a>
        `);
    }
});

server.listen(5000);