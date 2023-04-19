import React from "react";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Create from "./Components/Create";

const App =()=>{

    const user = useSelector(selectUser)
    return(
        <div>
            {user ? <Create/> : <Login/>}
        </div>
    )
}

export default App