import React from "react"

class Dice extends React.Component{
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            
               num1: Math.floor(Math.random()* 6) +1,
               num2: Math.floor(Math.random()* 6) +1,
               num3: Math.floor(Math.random()* 6) +1,
               num4: Math.floor(Math.random()* 6) +1,
               num5: Math.floor(Math.random()* 6) +1
        })
    }
    render(){
        return(
            
                   <div className="Dice">
                    <h1>{this.state.num1}</h1>
                    <h1>{this.state.num2}</h1>
                    <h1>{this.state.num3}</h1>
                    <h1>{this.state.num4}</h1>
                    <h1>{this.state.num5}</h1>
            
       
   
                <button onClick={this.handleClick}>Roll</button>
            </div>
        )
    }

}

        
   

export default Dice