const { Sequelize } = require("sequelize");

// module.exports = {
//         username: process.env.DB_USER,
//         password: process.env.DB_ROOT_PASSWORD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         dialect: process.env.DB_CLIENT
// };

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
