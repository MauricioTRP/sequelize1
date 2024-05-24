// Configuración del ORM

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    // mas opciones de configuración
  }
)

async function testConexion() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = sequelize;