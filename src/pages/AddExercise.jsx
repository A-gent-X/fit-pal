import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import './AddExercise.css'


const AddExercise = () => {
const {state} = useContext(AuthContext)

  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [imgURL, setURL] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/api/exercise', {description, date, imgURL, userId: state.userId})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }

  return (
    <div className='fit-container'>
      <form id='fit-form'
      onSubmit={e => handleSubmit(e)}>
        <input className='fit-description' placeholder='description' onChange={e => setDescription(e.target.value)}/>
        <input className='input-date' type='date' onChange={e => setDate(e.target.value)}/>
        <input className='workout-img' placeholder='image url' onChange={e => setURL(e.target.value)}/>
        <button className='fit-btn' type='submit'>Add Exercise</button>
      </form>
    </div>
  )
}

export default AddExercise