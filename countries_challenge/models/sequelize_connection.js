let Sequelize = require('sequelize')

module.exports = new Sequelize( 'country', 'learn','postgres', {
  host: 'localhost',
  dialect: 'postgres',

})
