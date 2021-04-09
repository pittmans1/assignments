import React, {useState} from "react"
import {Link} from "react-router-dom"


export default function Navbar(props){
    const {logout} = props

    const [toggle, setToggle] = useState(false)

    function toggleForm(){
        setToggle(prev => !prev)
       
      }

     
    return(
        <div className="navbar">
            <Link to="/profile">Profile</Link>
           <button onClick={logout}>Logout</button> 
        {toggle ? 
    <>
    <p onClick={toggleForm}>Menu</p>
    <Link to="/Mitsubishi">Mitsubishi</Link>
    <br></br>
    <Link to='/Toyota'>Toyota</Link>
    <br></br>
    <Link to='/'>Home</Link>
    </>
     :
    <>
     <p onClick={toggleForm}>Menu</p>
    </>
 
    } 
        </div>
    )
    
}