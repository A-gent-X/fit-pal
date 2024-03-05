/*eslint no-undef: "error"*/
/*eslint-env node*/

const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
  ProgressTracker: sequelize.define('progress_tracker', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    currentWeight: DataTypes.INTEGER,
    date: DataTypes.DATE
  })
}