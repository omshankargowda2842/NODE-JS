const fs=require("fs")
let data=fs.readFileSync("file.txt","utf-8")
console.log(data)
// fs.readFile("file.txt","utf-8",(err,newdata)=>{
//     console.log(newdata)
// })