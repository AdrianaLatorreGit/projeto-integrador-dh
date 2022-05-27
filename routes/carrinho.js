const express = require("express");
const router = express.Router();

/* GET carrinho. */
router.get("/carrinho", (req, res, next) => {
    res.render("carrinho");
});

module.exports = router;
