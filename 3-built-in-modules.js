const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync("./content/first.txt","utf8");
const second = readFileSync("./content/second.txt","utf8");
console.log(first, second);

// writeFileSync("./content/result-sync.txt",`Hello this is the result ${first}, ${second}`);
writeFileSync("./content/result-sync.txt",`Hello this is the result ${first}, ${second}`,{flag:"a"});


// const path = require("path");
// console.log(path.sep)
//
// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);

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