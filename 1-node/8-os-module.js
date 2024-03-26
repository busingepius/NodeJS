const os = require("os");

// info about the user
const user = os.userInfo();
console.log(user)

// method returns system uptime in seconds
console.log(`${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);