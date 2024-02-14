//const express = require("express");
//const app = express();

const app = require("express")();


//route
    //endpoint
        //callback function
        //request, response
app.get("/", (req, res)=>{
res.send({data: "welcome"});
});

app.get("/secondRoute",(req, res)=>{
res.send({data: [1,2,3,4]})
})

app.get("/thirdroute",(req,res)=>{
    res.send({data:"hej"})
})
app.get("/thirdroute/:someValue/:someOtherValue",(req,res)=>{
const firstValue = req.params.someValue;
const secondValue=req.params.someOtherValue;
  

let balance = 100;

app.get("/wallet/:WithDrawalAmount",(req,res)=>{
  
    const WithDrawalAmount = Number(req.params.WithDrawalAmount);
    if (!WithDrawalAmount) res.send({data: "you have submitted an incorrect amount"})
    
    if(balance-WithDrawalAmount<0){
        res.send({data: "not enough funds"})
    } else {
        balance -= WithDrawalAmount
        res.send({data: `your new balance is ${balance}`})
    }

    res.send({})
    

})


res.send({data: "you reached some value endpoint"})
})
app.get("/page",(req,res)=>{
    res.send("<h1>Welcome to my page<h1/>")
})
// hhtp:80
// https: 443
// http dev: 8080
// https dev: 9090

app.listen(8080);
