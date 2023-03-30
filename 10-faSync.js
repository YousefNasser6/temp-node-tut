// file system

const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs'); // another way 
console.log("start")
const first = readFileSync('./subfolder/first.txt', 'utf-8')
const second = readFileSync('./subfolder/text.txt', 'utf-8')

console.log(first, second)

writeFileSync('./subfolder/result-sync.txt',
 `here is the result ${first}, ${second}`, 
 {flag : 'a'}
 )
 console.log("done with this task ")
 console.log("starting the next one ")