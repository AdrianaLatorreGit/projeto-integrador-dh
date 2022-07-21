const express = require("express");
const router = express.Router();
const planosController = require("../controllers/painelAdminController");

/* GET Painel Admin */
router.get("/painelAdmin", planosController);

module.exports = router;
