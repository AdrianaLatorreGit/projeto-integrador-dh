const { DataTypes } = require("sequelize");
const sequelize = require("../config/database/db");

const Pedidos = sequelize.define("pedidos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    UsuarioId: {
        type: DataTypes.INTEGER,
        references: { model: "usuarios", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
    },

    ProdutosId: {
        type: DataTypes.INTEGER,
        references: { model: "produtos", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
    },
});

await Pedidos.sync();

module.exports = Pedidos;
