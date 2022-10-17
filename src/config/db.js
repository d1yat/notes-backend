const { Sequelize } = require('sequelize')

const db = new Sequelize('test', 'sudiyat', 'psudiyat', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db
