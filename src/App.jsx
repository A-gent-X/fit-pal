import React from 'react'
import Auth from './pages/Auth.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import MealList from './pages/MealList.jsx'
import ExerciseList from './pages/ExerciseList.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddExercise from './pages/AddExercise.jsx'
import AddMeal from './pages/AddMeal.jsx'
import { getAllMeals } from './pages/MealList.jsx'
import { getAllWorkouts } from './pages/ExerciseList.jsx'
import { getUserGoal } from './pages/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    basename: '/home',
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: getUserGoal
      },
      {
        path: '/meallist',
        element: <MealList />,
        loader: getAllMeals
      },
      {
        path: '/exerciselist',
        element: <ExerciseList />,
        loader: getAllWorkouts
      },
      
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/addmeal',
        element: <AddMeal />
      },
      {
        path: '/addexercise',
        element: <AddExercise />
      }
    ]
  }
])

const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}

export default App