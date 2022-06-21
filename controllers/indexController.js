const indexController = (req, res, next) => {
    res.render("index", { title: "Home" });
};

module.exports = indexController;
