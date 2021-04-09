import React, {useContext} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Navbar from "./component/Navbar"
import Auth from "./component/Auth"
import {UserContext} from "./context/UserProvider"
import ProtectedRoute from "./component/protectedRoute"
import Profile from "./component/Profile"
import Mitsubishi from "./component/Mitsubishi"

export default function App(){
    const {token, logout,} = useContext(UserContext)
    return(
        <div className="app">
            { token && <Navbar logout={ logout} token = {token} />}
            <Switch>
                <Route exact path ="/"
                render={() => token ? <Redirect to ="/profile"/>: <Auth/>}/>
                <ProtectedRoute
                path ="/profile"
                component ={Profile}
                RedirectTo='/'
                token={token}
                />
                <Route path = "/mitsubishi" component={Mitsubishi} />
            </Switch>
    </div>
    )
}