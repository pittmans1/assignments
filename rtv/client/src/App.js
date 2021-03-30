import React, {useContext} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./component/Navbar.js"
import Auth from "./component/Auth.js"
import Profile from "./component/Profile"
import Public from "./component/Public"
import ProtectedRoute from "./component/protectedRoute.js"
import {UserContext} from "./context/UserProvider"


export default function App(){
    const {token, logout} = useContext(UserContext)
    return(
        <div className="app">
{  token  &&  <Navbar logout={logout}  token={token}/>}
             <Switch>
                 <Route
                    exact path = "/"
                    render={()=> token ? <Redirect to="/profile"/> : <Auth/>}/>
                <ProtectedRoute 
                     path="/profile"
                    component={Profile}
                    redirectTo='/'
                    token={token}
                />
                <ProtectedRoute 
                     path="/public"
                    component={Public}
                    redirectTo='/'
                    token={token}
                />
             </Switch>
        </div>
    )
}