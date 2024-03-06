import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Auth from './pages/Auth';
import AuthContext from './store/AuthContext';
import './Root.scss'
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";



const Root = () => {
  const {state, dispatch} = useContext(AuthContext)

  const navigate = useNavigate()
  

  return (
    <div className='rootnav-container'>
      {state.userId ? (
          <nav className='root-nav'>
              <span className='search-bar'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            className="searchBar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
        </span>
            <NavLink className='navlink' to='/dashboard'>Dash Board</NavLink>
            <NavLink className='navlink' to='/meallist'>Diet Plan</NavLink>
            <NavLink className='navlink' to='/addmeal'>Add Meal</NavLink>
            <NavLink className='navlink' to='/addexercise'>Add Exercise</NavLink>
            <NavLink className='navlink' to='/exerciselist'>Fitness Plan</NavLink> 
            <button id="root-btn" onClick={() => {dispatch({type: 'LOGOUT'}), 
            navigate('/')}}>Logout</button>
          </nav>
      ) : (
        <Auth />
      )}
      
      <Outlet />
  
    </div>
  )
}

export default Root