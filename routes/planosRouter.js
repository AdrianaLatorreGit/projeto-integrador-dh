const express = require("express");
const router = express.Router();
const planosController = require("../controllers/planosController");

/* GET planos. */
router.get("/planos", planosController);

module.exports = router;
