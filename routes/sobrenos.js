const express = require("express");
const router = express.Router();

/* GET sobrenos. */
router.get("/sobrenos", (req, res, next) => {
    res.render("sobrenos", { title: "Sobre nós" });
});

module.exports = router;
