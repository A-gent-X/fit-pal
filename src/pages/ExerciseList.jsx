import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import { useLoaderData } from 'react-router-dom'
import ExerciseCard from '../elements/ExerciseCard'
import './ExerciseList.css'
import { BiSearchAlt2 } from "react-icons/bi";
import Footer from './Footer'




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
    axios.get(`/api/workouts/${state.userId}`)
      .then(res => setAllWorkouts(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div className='fitness-div'>
      <div className='fitness-filter'>
      {allWorkouts.filter(workout => {
        return workout.description.toLowerCase().includes(searchTerm.toLowerCase())
      }).map(workout => {
        return <ExerciseCard key={workout.id} workout={workout} refetchAllWorkouts={refetchAllWorkouts}/>
      })}
      </div>
        <Footer />
    </div>
  )
}

export default ExerciseList