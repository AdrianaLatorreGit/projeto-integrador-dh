const adminController = async (req, res, next) => {
    res.render("admin", { title: "Administrador" });
};

module.exports = adminController;
