import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'

const Create = () => {

    const user = useSelector(selectUser)
    
    const dispatch = useDispatch()
    const handleLogout =(e) =>{
        e.preventDefault()

    
    dispatch(logout())
    }
  return (
    <div>
      <h1>Welcmome <span>{user.name}</span></h1>
      <button onClick={(e)=> handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Create
