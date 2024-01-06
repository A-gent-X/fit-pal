import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'

const AddMeal = () => {
const {state} = useContext(AuthContext)

  const [mealDescription, setMealDescription] = useState('')
  const [calories, setCalories] = useState('')
  const [date, setDate] = useState('')
  const [imgURL, setURL] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/api/meal', {mealDescription, calories, date, imgURL, userId: state.userId})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder='mealDescription' onChange={e => setMealDescription(e.target.value)}/>
        <input placeholder='record calories' onChange={e => setCalories(e.target.value)}/>
        <input type='date' onChange={e => setDate(e.target.value)}/>
        <input placeholder='image url' onChange={e => setURL(e.target.value)}/>
 
        <button type='submit'>Add Meal</button>
      </form>
    </div>
  )
}

export default AddMeal