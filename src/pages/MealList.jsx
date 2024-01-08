import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import { useLoaderData } from 'react-router-dom'
import MealCard from '../elements/MealCard'
import './MealList.css'
import { BiSearchAlt2 } from "react-icons/bi";

export const getAllMeals = async () => {
  const userId = localStorage.getItem('userId')
  const res = await axios.get(`/api/meals/${userId}`)
  return res.data
}

const MealList = () => {
  const {state} = useContext(AuthContext)
  const [allMeals, setAllMeals] = useState(useLoaderData())
  const [searchTerm, setSearchTerm] = useState('')

  const refetchAllMeals = () => {
    axios.get(`/api/meals/${state.userId}`)
      .then(res => setAllMeals(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div className='meal-holder'>
      <div className='search-meal'>
        {/* <input placeholder='Search for a meal' onChange={e => setSearchTerm(e.target.value)}/> */}
        <span className='search-bar'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            className="searchBar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a meals"
          />
        </span>
      </div>
      {allMeals.filter(meal => {
        return meal.mealDescription.toLowerCase().includes(searchTerm.toLowerCase())
      }).map(meal => {
        return <MealCard key={meal.id} meal={meal} refetchAllMeals={refetchAllMeals}/>
      })}
    </div>
  )
}

export default MealList