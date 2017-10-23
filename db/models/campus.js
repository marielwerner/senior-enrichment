const Sequelize = require('sequelize');
const db = require('../index')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING
    }
})
module.exports = Campus