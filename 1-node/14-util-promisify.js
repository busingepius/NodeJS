const {readFile,writeFile} = require( "fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise("./content/first.txt");
        const second = await readFilePromise("./content/second.txt");
        await writeFilePromise("./content/result-util-promisify","Hello ",{flag:"a"});
        console.log(`result is: \n${first}\n${second}`);
    } catch (err) {
        console.log(err);
    }
}

start();