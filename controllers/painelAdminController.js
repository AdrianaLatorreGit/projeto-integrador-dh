const painelAdminController = (req, res, next) => {
    res.render("painelAdmin", { title: "Painel Admin" });
};

module.exports = painelAdminController;
