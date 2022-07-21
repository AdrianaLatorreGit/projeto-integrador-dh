const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//Linkando Models
const Usuario = require("./models/Usuario");
const sequelize = require("./config/database/db");

// linkando Rotas
const indexRouter = require("./routes/indexRouter");
const carrinhoRouter = require("./routes/carrinhoRouter");
const planosRouter = require("./routes/planosRouter");
const sobrenosRouter = require("./routes/sobrenosRouter");
const detalheProdutoRouter = require("./routes/detalheProdutoRouter");
const loginCadastroRouter = require("./routes/loginCadastroRouter");
const painelAdminRouter = require("./routes/painelAdminRouter");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// usando rotas
app.use("/", indexRouter);
app.use("/", carrinhoRouter);
app.use("/", sobrenosRouter);
app.use("/", planosRouter);
app.use("/", detalheProdutoRouter);
app.use("/", loginCadastroRouter);
app.use("/", painelAdminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

async function main() {
    try {
        await sequelize.authenticate();
        // Apagar o banco
        // await Usuario.sync({ force: true });

        console.log("Conexão com sucesso 😙");

        app.listen(port, () => {
            console.log(`Porta rodando 😍`);
        });
    } catch (err) {
        console.error(err);
    }
}

main();

module.exports = app;
