const {Goal} = require('../models/goal')

module.exports = {
  addGoal: async (req, res) => {
    try {
      const {weightGoal, startingWeight, calorieGoal, userId} = req.body

      const newGoal = await Goal.create({weightGoal, startingWeight, calorieGoal, userId})

      res.status(200).send(newGoal)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrond in addGoal')
    }
  },
  getUserGoal: async (req, res) => {
    try{
      const {userId} = req.params
      console.log(userId)


      const userGoal = await Goal.findOne({
        where: {userId},
      })
      console.log(userGoal)


      res.status(200).send(userGoal)
    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  },
  editGoal: async (req, res) => {
    try {
      const {weightGoal, startingWeight, calorieGoal} = req.body

      await Goal.update({weightGoal, startingWeight, calorieGoal}, {where: {id: goalId}})

      res.sendStatus(200)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong in getUserGoal')
    }
  },
  deleteGoal: async (req, res) => {
    try {
      const {goalId} =req.params

      await Goal.destroy({where: {id: goalId}})

      res.sendStatus(200)

    }catch (err) {
      console.log(err)
      res.status(500).send('Something went wrong in goals')
    }
  }
}