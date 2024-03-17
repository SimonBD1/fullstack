import { Router } from "express";

const router = Router();

import {
  week1Page,
  week2Page,
  week3Page,
  week4Page,
  week5Page,
  week6Page,
  week7Page,
  week8Page,
} from "../util/readPages.js";

router.get("/uge1", (req, res) => {
  res.send(week1Page);
});

router.get("/uge2", (req, res) => {
  res.send(week2Page);
});

router.get("/uge3", (req, res) => {
  res.send(week3Page);
});

router.get("/uge4", (req, res) => {
  res.send(week4Page);
});

router.get("/uge5", (req, res) => {
  res.send(week5Page);
});

router.get("/uge6", (req, res) => {
  res.send(week6Page);
});

router.get("/uge7", (req, res) => {
  res.send(week7Page);
});

router.get("/uge8", (req, res) => {
  res.send(week8Page);
});

export default router;
