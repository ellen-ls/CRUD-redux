import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {

    const [username, setUsername] = useState("")

    const onInput = (e)=> setUsername(e.target.value)


    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(login({
            name:username,
            loggedIn:true

        }))
    }

  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e)=> handleSubmit(e)}>
        <h1>Welcome to CodeLeap network!</h1>
        <p>Please enter your username</p>
        <input 
        className='username' 
        placeholder='Jonh Doe' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        onInput={onInput}
        />
        <button disabled={!username}>Enter</button>
      </form>
    </div>
  )
}

export default Login
