const { Sequelize } = require("sequelize");

// Primeiro parimetro é o nome do banco, segundo username, terceiro senha do mysql
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_ROOT_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
    }
);

module.exports = sequelize;
