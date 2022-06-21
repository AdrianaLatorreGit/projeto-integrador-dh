const express = require("express");
const router = express.Router();
const sobrenosController = require('../controllers/sobrenosController')

/* GET sobrenos. */
router.get("/sobrenos", sobrenosController );

module.exports = router;
