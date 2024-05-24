// Importamos ORM configurado -> viene de archivo
const sequelize = require("../sequelize");

// Importamos "utilidad" de tipos de datos -> viene de node_modules
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
  }
  // Más campos
});

module.exports = Usuario