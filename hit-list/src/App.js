import React from "react"
import style from "./index.css"

class App extends React.Component{
    constructor(){
        super()
        this.state= {
            loading: false,
            hit : []
        }
    }
    componentDidMount(){
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                hit: data
            })
        })
    }
    render(){
        const text = this.state.loading ? "loading..." : ""
        return(
            <div className="grid">
                <h2>{text}</h2>
               <div className="picture"> {this.state.hit.map(image => <img className="photo" src={image.image}/>)}</div>
                <div className="name">{this.state.hit.map(person => <h1 className='names'>{person.name}</h1>)} </div>
                <hr/>
            </div>
        )
    }
}

export default App