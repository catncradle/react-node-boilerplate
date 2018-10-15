const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('vet', {
  companyName: {type: Sequelize.STRING},
  address: {type: Sequelize.STRING}
})

module.exports = User
