import React from "react"



class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        color: ""
      }
      this.updateColor = this.updateColor.bind(this)
    }
    updateColor(){
      fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response =>response.json())
       .then(data => {
        let getColor = '#' + data.new_color
        this.setState({color: getColor})
      })
        .then (() => {
          document.body.style.backgroundColor = this.state.color
        })
    }
  
    render() {
      return (
        <div  className="container">
          <p className="Contents">Click to generate random color</p>
          <button onClick={this.updateColor} className="Contents">Click Here</button>
        </div>
      )
    }
  }
  
  export default App
  