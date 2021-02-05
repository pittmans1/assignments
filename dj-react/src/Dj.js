import React from 'react'
import Square from './Square'
import './style.css'

class Dj extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            squares: ['white', 'white', 'white', 'white']
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.proDJ = this.proDJ.bind(this)
        this.proDJ2 = this.proDJ2.bind(this)
        this.bigTimeDJ = this.bigTimeDJ.bind(this)
        this.music = this.music.bind(this)
    }

    smallTimeDJ(){
        if(this.state.squares[0] === 'white'){
            this.setState({
                squares: ['black', 'black', 'black', 'black']
            })
        } else {
            this.setState({
                squares: ['white', 'white', 'white', 'white']
            })
        }
    }

    partyDJ(){
        this.setState({squares: ['purple', 'purple', this.state.squares[2], this.state.squares[3]]
        })
    }

    proDJ(){
        let items = [...this.state.squares]
        items[2] = 'blue'
        this.setState({ squares: items})
    }

    proDJ2(){
        let items = [...this.state.squares]
        items[3] = 'blue'
        this.setState({ squares: items})
    }

    bigTimeDJ(){
            this.setState({squares: ['blue', 'red', 'green', 'yellow']})
    }
    music(){
         new Audio("https://sounds.loopcloud.com/product/12444-Bossfight-Dubstep?user=true&shop=true&wave=true&tags%5B%5D=bf8c4cd0-6b52-4d52-9c86-da5c28714e8d&page=1").play()
    }

    render(){
        const squares = this.state.squares.map (square => <Square key={this.square + 1} color= {square} />)

        return(
            <div style={{background: `url (${'https://coursework.vschool.io/content/images/size/w2000/2018/02/denon-dj-mc7000-top_960x540.jpg'}) no-repeat center center`}} className="container">
            {squares}
            <button onClick={this.smallTimeDJ}>Small Time DJ</button>
            <button onClick={this.partyDJ}>Party DJ</button>
            <button onClick={this.proDJ}>Pro DJ 1</button>
            <button onClick={this.proDJ2}>Pro DJ 2</button>
            <button onClick={this.bigTimeDJ}>Big Leagues</button>
            <button onClick={this.music}>Music Bumpin</button>
            </div>
        )
    }
}
export default Dj