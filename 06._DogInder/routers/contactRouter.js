//api/contact
import { Router } from "express";

const router = Router();

router.post("/api/contact", (req, res) => {
  console.log("Form: ", req.body);
  res.redirect("/")
});

export default router;
