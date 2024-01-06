require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')

const {User} = require('./models/user')
const {Goal} = require('./models/goal')
const {Meals} = require('./models/meals')
const {Workouts} = require('./models/workouts')
const {ProgressTracker} = require('./models/progressTracker')

User.hasMany(Goal)
Goal.belongsTo(User)

User.hasMany(Meals)
User.hasMany(Workouts)
User.hasMany(ProgressTracker)

Meals.belongsTo(User)
Workouts.belongsTo(User)
ProgressTracker.belongsTo(User)

const {register, login} = require('./controllers/authController')
const {addMeals, getAllMeals, editMeal} = require('./controllers/mealsController')
const {addWorkouts, getAllWorkouts} = require('./controllers/exerciseController')
const {addGoal, getUserGoal} = require('./controllers/goalsController')


const {PORT} = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/register', register)
app.post('/api/login', login)

app.post('/api/meal', addMeals)
app.get('/api/meals/:userId', getAllMeals)
app.put('/api/meal', editMeal)

app.post('/api/exercise', addWorkouts)
app.get('/api/workouts/:userId', getAllWorkouts)

app.post('/api/goal', addGoal)
app.get('/api/goal/:userId', getUserGoal)

sequelize.sync()
// sequelize.sync({force: true})
    .then(() => app.listen(PORT, console.log(`Take us to paradise ${PORT}!`)))
    .catch(err => console.log(err))