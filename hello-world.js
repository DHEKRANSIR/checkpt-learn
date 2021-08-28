const fs=require('fs')
fs.readFile('test.txt',(err,data)=>{
    err?console.log('error',err):console.log(data.toString())
})