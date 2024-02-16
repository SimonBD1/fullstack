const express = require("express");
const app = express();

// const app = require("express")();

app.use(express.json());

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
})
 

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
});
//?handsome=very&tall=indeed&cool=always
app.get("/saysnam/:greeting", (req, res) => {
    console.log(req.params.greeting);
    console.log(req.query);
    if (req.query.handsome !== "very") {
        return res.send({ data: "No way jose" });
    } else {
        return res.send({ data: "thanks top g" });
    }
});

app.post("/postman",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.get("/page",(req,res)=>{
    res.send("<h1>Welcome to my page<h1/>")
});
// hhtp:80
// https: 443
// http dev: 8080
// https dev: 9090

app.listen(8080);
