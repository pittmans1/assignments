import React, {useContext} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./component"
import Auth from "./component"
import Profile from "./component"
import Public from "./component"
import {UserContext} from "./context/UserProvider"


export default function App(){
    const {token, logout} = useContext(UserContext)
    return(
        <div className="app">
            <Navbar logout={logout}/>
             <Switch>
                 <Route
                    exact path = "/"
                    render={()=> token ? <Redirect to="/profile"/> : <Auth/>}/>
                <Route 
                     path="/profile"
                    render={()=> <Profile/>}
                />
                <Route 
                     path="/public"
                    render={()=> <Public/>}
                />
             </Switch>
        </div>
    )
}