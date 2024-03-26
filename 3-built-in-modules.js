// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Welcome to our home page");
//     } else if (req.url === "/about") {
//         res.end("Know about us");
//     } else {
//         res.end(`
//         <h1>Oooops!</h1>
//         <p>We can't seem to find you requested page</p>
//         <a href="/">back home</a>
//         `);
//     }
// });
// server.listen(5000);


////////////////////////////////////////////////////////////////
// const {readFile, writeFile} = require("fs");
// readFile("./content/first.txt", 'utf8', (err, result) => {
//     if (err) {
//         return;
//     }
//     const first = result;
//     writeFile(
//         "./content/result-async.txt",
//         "hello result async",
//         {flag: "a"},
//         (err, result) => {
//             if (err) {
//                 return;
//             }
//         })
// });

//////////////////////////////////////////////////////////////////////////////
// const {readFileSync, writeFileSync} = require("fs");
//
// const first = readFileSync("./content/first.txt","utf8");
// const second = readFileSync("./content/second.txt","utf8");
// console.log(first, second);
//
// // writeFileSync("./content/result-sync.txt",`Hello this is the result ${first}, ${second}`);
// writeFileSync("./content/result-sync.txt",`Hello this is the result ${first}, ${second}`,{flag:"a"});


//////////////////////////////////////////////////////////////////////////////

// const path = require("path");
// console.log(path.sep)
//
// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);


//////////////////////////////////////////////////////////////////////////////


// const os = require("os");
//
// // info about the user
// const user = os.userInfo();
// console.log(user)
//
// // method returns system uptime in seconds
// console.log(`${os.uptime()} seconds`)
//
// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem(),
// }
// console.log(currentOS);