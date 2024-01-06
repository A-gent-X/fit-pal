const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  Workouts: sequelize.define('workouts', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: DataTypes.STRING(5000),
    date: DataTypes.DATE,
    imgURL: DataTypes.STRING(5000)
  })
}