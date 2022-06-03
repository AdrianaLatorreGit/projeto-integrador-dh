const express = require("express");
const router = express.Router();

/* GET planos. */
router.get("/planos", (req, res, next) => {
    res.render("planos", { title: "Planos" });
});

module.exports = router;
