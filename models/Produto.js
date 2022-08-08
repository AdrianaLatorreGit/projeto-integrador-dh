const { DataTypes } = require("sequelize");
const sequelize = require("../config/database/db");

const Produto = sequelize.define("produtos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // categoria: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    detalhes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },

});

module.exports = Produto;
