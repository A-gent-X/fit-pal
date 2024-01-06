const {Workouts} = require('../models/workouts')

module.exports = {
  addWorkouts: async (req, res) => {
    try {
      const {description, date, imgURL, userId} = req.body

      const newWorkouts = await Workouts.create({description, date, imgURL, userId})

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
        order: ['description', 'date', 'imgURL']})

      res.status(200).send(allWorkouts)
    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  },
  editWorkouts: async (req, res) => {
    try {
      const {description, date, imgURL} = req.body

      await Workout.update({description, date, imgURL}, {where: {id: workoutId}})

      res.sendStatus(200)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong in getAllWorkouts')
    }
  }
}