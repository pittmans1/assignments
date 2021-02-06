import { render } from "@testing-library/react"
import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            li:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event){
        const{ name, value} = event.target
        this.setState({
            [name]: value
        })
        
    }
        handleClick() {
            this.setState({
                li: [
                    ...this.state.li,
                    this.state.name
                ]
            })
            this.state.name=""
        }
    

    render(){
        const list =this.state.li
        return(
            <div>
                <label>Insert Desired Names Here
                <input type="text" name="name" placeholder="insert desired name" onChange={this.handleChange} value={this.state.name}/>
                </label>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleClick}>Click me to complie</button>
                <ol>
                    {list.map(s => (
                        <li>{s}</li>
                    ))}
                </ol>
            </div>
        )
    }

}



export default App