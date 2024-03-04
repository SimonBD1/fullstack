const { response } = require("express");
const express = require("express") 
const app = express();


/* const helicopterFactoryFile = require("./util/helicopterFactory")
console.log(helicopterFactoryFile.helicopterFactory); */

const { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());

app.use(express.static("public"))

app.get("/proxy",async(req,res)=>{
    fetch("https://www.google.com")
    .then((response)=>response.text())
    .then((result)=>res.send(result))
    .then (buffer=>{
        const decoder = new TextDecoder()
    });

})

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/homepage/homepage.html");
})

app.get("/publicSquare",(req,res)=>{
    res.sendFile(__dirname+"/public/publicSquare/publicSquare.html")
})


const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT));