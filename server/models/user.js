const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  User: sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: DataTypes.STRING(5000),
    hashedPass: DataTypes.STRING(5000),
    email: DataTypes.STRING(5000)
  })
}