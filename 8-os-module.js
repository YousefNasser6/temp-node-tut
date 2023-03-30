// 1. operating system module 
const os = require('os')
// info about current user 
const user = os.userInfo()

//  system uptime in seconds
console.log(`the system up time in seconds ${os.uptime}`)

// current os info object

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)