import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Auth from './pages/Auth';
import AuthContext from './store/AuthContext';
import './Root.css'
import { useNavigate } from 'react-router-dom';




const Root = () => {
  const {state, dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <div className='rootnav-container'>
      {state.userId ? (
          <nav className='root-nav'>
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