import React, { Component } from "react"
import Form from "./Form"
import UglyLists from "./UglyList"


class App extends Component{
    
    
    render(){
        return(
            <div>
                <Form/>
                <UglyLists/>
            </div>
        )

    }
}

export default App