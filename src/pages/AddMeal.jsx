import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import './AddMeal.css'
import Footer from './Footer'

const AddMeal = () => {
const {state} = useContext(AuthContext)

  const [mealDescription, setMealDescription] = useState('')
  const [calories, setCalories] = useState('')
  const [date, setDate] = useState('')
  const [imgURL, setURL] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/api/meals', {mealDescription, calories, date, imgURL, userId: state.userId})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }

  return (
    <div id='meal-container'>
      <form id='meal-form'
      onSubmit={e => handleSubmit(e)}>
        <div className='meal-div'>
          <input className='meal-description' placeholder='mealDescription' onChange={e => setMealDescription(e.target.value)}/>
          <input className='input-calories' placeholder='record calories' onChange={e => setCalories(e.target.value)}/>
        </div>
          <input className='calendar' type='date' onChange={e => setDate(e.target.value)}/>
          <input className='input-img' placeholder='image url' onChange={e => setURL(e.target.value)}/>
          <button className='meal-btn' type='submit'>Add Meal</button>
      </form>
      <Footer />
    </div>
  )
}

export default AddMeal