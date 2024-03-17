import express from "express";

const app = express();

app.use(express.static("public"));

import weekpageRouter from "./routers/weekpageRouters.js";
app.use(weekpageRouter);

import homepageContactetcRouter from "./routers/homeContactetcRouters.js";
app.use(homepageContactetcRouter)

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port" + PORT));
