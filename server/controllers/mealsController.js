const {Meals} = require('../models/meals')

module.exports = {
  addMeals: async (req, res) => {
    try {
      const {mealDescription, calories, date, imgURL, userId} = req.body

      const newMeal = await Meals.create({mealDescription, calories, date, imgURL, userId})

      res.status(200).send('That worked!')

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrond in addMeals')
    }
  },
  getAllMeals: async (req, res) => {
    try{
      const {userId} = req.params



      const allMeals = await Meals.findAll({
        where: {userId},
      })

      res.status(200).send(allMeals)
    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong')
    }
  },
  editMeal: async (req, res) => {
    try {
      const {mealDescription, calories, date, imgURL, userId, mealId} = req.body

      await Meal.update({mealDescription, calories, date, imgURL, userId}, {where: {id: mealId}})

      res.sendStatus(200)

    } catch(err){
      console.log(err)
      res.status(500).send('Something went wrong in getAllMeals')
    }
  }
}