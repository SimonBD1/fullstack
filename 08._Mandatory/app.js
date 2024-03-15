import express from "express";

const app = express();

app.use(express.static("public"));

import { homepagePage, week1Page } from "./util/readPages.js";

app.get("/", (req, res) => {
  res.send(homepagePage);
});

app.get("/uge1",(req,res)=>{
    res.send(week1Page)
})


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port" + PORT));
