import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState("")

    const onInput = (e)=> setUsername(e.target.value)

  return (
    <div className='login'>
      <form className='login__form'>
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
