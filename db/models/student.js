const Sequelize = require('sequelize');
const db = require('../index')

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
})
module.exports = Student;