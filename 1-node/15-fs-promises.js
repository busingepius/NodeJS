const {readFile,writeFile} = require( "fs").promises;

const start = async () => {
    try {
        const first = await readFile("./content/first.txt",'uft8');
        const second = await readFile("./content/second.txt",'utf8');
        await writeFile("./content/result-util-promisify","Hello ",{flag:"a"});
        console.log(`result is: \ n${first}\n${second}`);
    } catch (err) {
        console.log(err);
    }
}

start();