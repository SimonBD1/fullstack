import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/api/volcanoes", async (req, res) => {
  const result = await db.all(`SELECT * FROM volcanoes;`);
  console.log(result);
  res.send({ data: result });
});

router.post("/api/volcanoes", async (req, res) => {
  const { Name, isActive, type } = req.body;
  if (!Name) {
    return res.status(400).send({ data: "Missing key in body: Name" });
  }
  if (isActive == undefined || isActive == null) {
    return res.status(400).send({ data: "Missing key in body: isActive" });
  }
  if (!type) {
    return res.status(400).send({ data: "Missing key in body: type" });
  }
  const result = await db.run(
    `INSERT INTO volcanoes (Name, isActive, type) VALUES (?,?,?)`,[Name, isActive, type]
  );
  res.send({ lastId: result.lastID });
});

export default router;
