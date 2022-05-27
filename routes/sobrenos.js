const express = require("express");
const router = express.Router();

/* GET sobrenos. */
router.get("/sobrenos", (req, res, next) => {
    res.render("sobrenos");
});

module.exports = router;
