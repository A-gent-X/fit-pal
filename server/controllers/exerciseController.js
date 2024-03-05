/*eslint no-undef: "error"*/
/*eslint-env node*/

const {Workouts} = require('../models/workouts')

module.exports = {
  addWorkouts: async (req, res) => {
    try {
      const {description, weight, volume, date, imgURL, userId} = req.body

      const newWorkouts = await Workouts.create({description, weight, volume, date, imgURL, userId})

      res.status(200).send(newWorkouts)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrond in addWorkouts')
    }
  },
  getAllWorkouts: async (req, res) => {
    try{
      const {userId} = req.params



      const allWorkouts = await Workouts.findAll({
        where: {userId},
        })

      res.status(200).send(allWorkouts)
    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  },
  editWorkouts: async (req, res) => {
    try {
      const {description, weight, volume, date, imgURL} = req.body

      await Workout.update({description, weight, volume, date, imgURL}, {where: {id: workoutId}})

      res.sendStatus(200)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong in getAllWorkouts')
    }
  },
  deleteWorkouts: async (req, res) => {
    try {
      const {workoutId} =req.params

      await Workouts.destroy({where: {id: workoutId}})

      res.sendStatus(200)

    }catch (err) {
      console.log(err)
      res.status(500).send('Something went wrong in deleteWorkouts')
    }
  }
}