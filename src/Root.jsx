import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Auth from './pages/Auth';
import AuthContext from './store/AuthContext';
import './Root.css';
import Footer from './pages/footer.jsx'

const Root = () => {
  const {state, dispatch} = useContext(AuthContext)
  return (
    <div>
      {state.userId ? (
          <nav id='root-nav'>
            <NavLink to='/dashboard'>Dash Board</NavLink>
            <NavLink to='/meallist'>Diet Plan</NavLink>
            <NavLink to='/addmeal'>Add Meal</NavLink>
            <NavLink to='/addexercise'>Add Exercise</NavLink>
            <NavLink to='/exerciselist'>Fitness Plan</NavLink> 
            <button id="root-btn" onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
          </nav>
      ) : (
        <Auth />
      )}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root