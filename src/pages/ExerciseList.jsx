import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import { useLoaderData } from 'react-router-dom'
import ExerciseCard from '../elements/ExerciseCard'
import Footer from './footer'



export const getAllWorkouts = async () => {
  const userId = localStorage.getItem('userId')
  const res = await axios.get(`/api/workouts/${userId}`)
  return res.data
}

const ExerciseList = () => {
  const {state} = useContext(AuthContext)
  const [allWorkouts, setAllWorkouts] = useState(useLoaderData())
  const [searchTerm, setSearchTerm] = useState('')
  console.log(allWorkouts)


  const refetchAllWorkouts = () => {
    axios.get(`/api/workouts/${userId}`)
      .then(res => setAllWorkouts(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>
        <input placeholder='Search for a workout' onChange={e => setSearchTerm(e.target.value)}/>
      </div>
      {allWorkouts.filter(workout => {
        return workout.description.toLowerCase().includes(searchTerm.toLowerCase())
      }).map(workout => {
        return <ExerciseCard key={workout.id} workout={workout} refetchAllWorkouts={refetchAllWorkouts}/>
      })}
    </div>
  )
}

export default ExerciseList