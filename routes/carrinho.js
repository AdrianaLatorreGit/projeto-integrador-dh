const express = require("express");
const router = express.Router();

/* GET carrinho. */
router.get("/carrinho", (req, res, next) => {
    return res.render("carrinho", { title: "Carrinho" });
});

module.exports = router;
