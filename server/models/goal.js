/*eslint no-undef: "error"*/
/*eslint-env node*/

const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  Goal: sequelize.define('goal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    weightGoal: DataTypes.INTEGER,
    startingWeight: DataTypes.INTEGER,
    calorieGoal: DataTypes.INTEGER
  })
}