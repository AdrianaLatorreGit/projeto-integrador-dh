const express = require("express");
const router = express.Router();
const headerController = require("../controllers/headerController");

// let a = ["/", "/produtos"];

router.get("/produtos", headerController);
