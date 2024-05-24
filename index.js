// Importamos (otra vez) el ORM configurado
const sequelize = require('./db/sequelize')

// Importamos modelo usuario
const Usuario = require('./db/models/usuario')

// Sincronizamos modelos con DB
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada')
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos', error)
  })