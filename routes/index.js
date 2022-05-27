var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
/* GET carrinho. */
router.get("/sobrenos", function (req, res, next) {
    res.render("sobrenos", { title: "Express" });
});

module.exports = router;
