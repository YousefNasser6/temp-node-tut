const {readFile, writeFile} = require('fs');

console.log('start')
readFile(`./subfolder/first.txt`, 'utf-8', (err, result )=>{
    if (err){
        console.log(err)
        return null
    }

    const first = result
    readFile('./subfolder/text.txt', 'utf-8', (err, result )=>{
        if (err){
            console.log(err)
            return null
        }
    
        const second = result
        writeFile('./subfolder/result-async.txt',
        `here is the result ${first}, ${second}`, 
        (err, result)=>{
            if (err){
                console.log(err)
                return null
            }
            console.log(result)
            console.log("done with this task ")
        })
    })
})

console.log("starting the next one ")