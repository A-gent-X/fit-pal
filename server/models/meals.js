const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  Meals: sequelize.define('meals', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    mealDescription: DataTypes.STRING(5000),
    calories: DataTypes.INTEGER,
    date: DataTypes.DATE,
    imgURL: DataTypes.STRING(5000),
  })
}