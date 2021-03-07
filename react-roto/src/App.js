import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

 function App(props){
    return(
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        </Switch>

        </div>
    )
 }
 export default App