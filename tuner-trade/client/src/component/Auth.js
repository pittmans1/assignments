import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
const initInputs = {username:"", password:''}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
     
    const {signup, login, errMsg, restAuthError} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        }))
    }
    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }
    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }
    function toggleForm(){
        setToggle(prev => !prev)
        restAuthError()

    }
    return(
        <div className = "auth-container">
            <h1>Tuner's Trade</h1>
            {!toggle ? 
            <>
                <AuthForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign Up"
                errMsg={errMsg}
                />
                <p onClick = {toggleForm}>Already a memember?</p>
                </>
                :
                <>
                <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
                />
               <p onClick = {toggleForm}>Not a memember?</p>

                </>
            }


        </div>
        
    )
}