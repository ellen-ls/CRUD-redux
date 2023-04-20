import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        login:(state, action)=>{
            state.user = action.payload
        },
        logout:(state)=>{
            state.user = null
        },
        addPost:(state, action) =>{
            state.user.push()
            console.log(action)

        }
    }
})

export const {login, logout, addPost} = userSlice.actions;

export const selectUser = (state)=> state.user.user

export default userSlice.reducer