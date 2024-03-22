import express from "express";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}))

import matchesRouter from "./routers/matchesRouter.js";
app.use(matchesRouter);

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)


console.log(process.env.PORT);
const PORT = process.env.PORT ?? 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
//PORT=9090 nodemon app.js
//man skriver environment variables til at starte med. kan også og plejer også at skrives i package.json