var mymodule = require('./mymodule.js')
var path = require('path')
var dir=process.argv[2]
var filter=process.argv[3] 

mymodule (dir,filter, function (err, data) {
    if (err) {
        console.log("There was an error")
    }
    else {
        console.log(data)
        }    

})