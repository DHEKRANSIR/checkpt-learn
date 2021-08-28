const fs=require('fs')
var files = fs.readFileSync(process.argv[2])
var lines = files.toString().split('\n').length -1
console.log(lines)