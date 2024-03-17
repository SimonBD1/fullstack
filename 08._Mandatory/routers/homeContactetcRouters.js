import { Router } from "express";

const router = Router();

import { homepagePage } from "../util/readPages.js";
router.get("/", (req, res) => {
    res.send(homepagePage);
  });
  
  export default router;