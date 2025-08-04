const path=require('path');
const fs = require('fs');
const moment = require('moment');


console.log("\n\n==PATH MODULES METHODS==")
console.log("File Name : "+__filename)
console.log("Directory Name : "+__dirname)
console.log("extension : "+path.extname('modules.js'))
console.log("extension : "+path.extname('package.json'))
console.log(path.resolve('file.txt'));



console.log("\n\n==MOMENT MODULES METHODS==")
console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
console.log(moment().format("DD-MM-YYYY"))
console.log(moment().add(7, 'days').format("DD-MM-YYYY"))
console.log(moment().format("dddd"))
console.log(moment())
console.log(moment)

console.log("\n\n==FILE SYSTEM MODULES METHODS==")
fs.writeFile("test.txt","This is a test file", 
    function(err)
    {
        if(err) throw err;
        console.log("File created successfully");
    }
);

fs.readFile("test.txt", "utf8",
    function(err, data) 
    {
        if (err) throw err;
        console.log("File content: " + data);
    }
)

