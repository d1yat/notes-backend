const { Sequelize } = require('sequelize')
const db = require('../config/db.js')

const { DataTypes } = Sequelize
const Notes = db.define('notes', {
    note_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    tags: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
}, {
    underscored: true
})

module.exports = Notes