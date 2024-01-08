import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import { useLoaderData } from 'react-router-dom'
import ExerciseCard from '../elements/ExerciseCard'
import './ExerciseList.css'
import { BiSearchAlt2 } from "react-icons/bi";




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
    <div className='fitness-div'>
    
      <div className='fitness-form'>
        {/* <input className='fitness-holder' placeholder='Search for a workout' onChange={e => setSearchTerm(e.target.value)}/> */}
        <span className='search-bar'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            className="searchBar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a meal"
          />
        </span>
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