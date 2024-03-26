const {readFile, writeFile} = require("fs");
readFile("./content/first.txt", 'utf8', (err, result) => {
    if (err) {
        return;
    }
    const first = result;
    writeFile(
        "./content/result-async.txt",
        "hello result async",
        {flag: "a"},
        (err, result) => {
            if (err) {
                return;
            }
        })
});