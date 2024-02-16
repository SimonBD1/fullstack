const express = require("express");
const app = express();
app.use(express.json());


const drinks = [
    { 
        id: 1, 
        name: "Negroni", 
        description: "A classic Italian cocktail known for its bitter-sweet flavour", 
        ingredients: ["3 cl gin", "3 cl sweet vermouth", "3 cl Campari", "Orange twist for garnish", "Ice"] 
    },
    { 
        id: 2, 
        name: "Daiquiri", 
        description: "A simple yet refreshing cocktail", 
        ingredients: ["5 cl white rum", "2.5 cl lime juice", "2 cl simple syrup", "Lime wedge for garnish", "Ice"] 
    },
    { 
        id: 3, 
        name: "Cosmopolitan", 
        description: "A popular cocktail known for its vibrant pink color", 
        ingredients: ["4 cl vodka", "2 cl cranberry juice", "1.5 cl triple sec", "1.5 cl lime juice", "Lime twist for garnish", "Ice"] 
    },
    { 
        id: 4, 
        name: "Mai Tai", 
        description: "A tropical cocktail originating from Polynesia", 
        ingredients: ["4 cl dark rum", "2 cl white rum", "1.5 cl lime juice", "1 cl orgeat syrup", "1 cl orange liqueur", "Pineapple wedge and cherry for garnish", "Ice"] 
    }
];


    app.get("/drink", (req, res)=>{
    res.send({ data: drinks });
    });

    app.get("/drink/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const drink = drinks.find(drink => drink.id === id);
        if (drink) {
            res.send({ data: drink });
        } else {
            res.status(404).send({ error: "Drink not found" });
        }
    });

    app.post("/drink",(req,res)=>{
        const newDrink = req.body;
        drinks.push(newDrink);
        res.send({ data: newDrink })
    })

    app.put("/drink/:id",(req,res)=>{
        const id = Number(req.params.id)
        const index = drinks.findIndex(drink => drink.id === id);
    if (index !== -1) {
        drinks[index] = { ...drinks[index], ...req.body };
        res.send({ data: drinks[index] });
    } else {
        res.status(404).send({ error: "Drink not found" });
    }
    })

    app.delete("/drink/:id",(req,res)=>{
        const id = Number(req.params.id);
        const index = drinks.findIndex(drink => drink.id === id);
        if (index !== -1) {
            drinks.splice(index, 1); //skal jeg bruge delete istedet?
            res.send({ data: "Drink deleted successfully" });
        } else {
            res.status(404).send({ error: "Drink not found" });
        }
    })
    

    app.listen(8080, (error)=>{
        if(error){
            console.log("Error starting")
            return;
        }
        console.log("server is running on port", 8080)
    });