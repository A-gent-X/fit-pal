import { useState, useContext, Image } from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import './Auth.css'
import { useNavigate } from 'react-router-dom'


const Auth = () => {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const [register, setRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('it')
    axios.post(`/api/${register? 'register' : 'login'}`, {username, password})
      .then(res => {
        console.log(res.data)
        dispatch({type: 'LOGIN', payload: res.data})
        navigate('/dashboard')
      })
      .catch(err => console.log(err))
  }


  return (
    <div className='auth-container'>
      <form className='auth-form' onSubmit={ e => handleSubmit(e)}>
        <h1>
          FitPal
          {/* <Image source={require('../assets/strength.png')}/> */}
        </h1>
        <h1>
          Please{" "}
           {register ? 'register': 'login'} below
        </h1>
        
        <div className='div-input'>
          <input className='user-input'
            placeholder='username' 
            onChange={e => setUsername(e.target.value)}
          />
          <input className='user-password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className='div-button'>
          <button className='reg-btn' onClick={() => setRegister(!register)}>{register ? 'login' : 'register'}</button>
            <div class="divider">&</div>
          <button className='auth-btn' type="submit">Submit</button>
        </div>
      </form>
  
     
    </div>
  )
}

export default Auth