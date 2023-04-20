import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import './Create.css'
import {addPost} from '../features/userSlice'
import axios from 'axios'

const Create = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const user = useSelector(selectUser)

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          await axios.post("https://dev.codeleap.co.uk/careers/",
              {
                  
                  title,
                  content
              })
          
          setTitle('')
          setContent('')
         
      } catch (err) {
          console.error(err)
      }
  }

    
    const dispatch = useDispatch()
    const handleLogout =(e) =>{
        e.preventDefault()

    
    dispatch(logout())
    }
  return (
    <div className='App'>
      <div className='header'>
      <h1>CodeLeap network!</h1>
      <button onClick={(e)=> handleLogout(e)}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
      <h1>What's on your mind?</h1>
        <p>Title</p>
        <input 
        className='title' 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}/>
        <p>Content</p>
        <input
         className='content' 
         onChange={(e)=>setContent(e.target.value)}
         value={content}/>
        <button 
        onClick={()=>{
          dispatch(addPost({title,content}))
        }}>Create</button>
      </form>
     
    </div>
  )
}

export default Create
