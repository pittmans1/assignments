import React from "react"
import { UglyThingsConsumer } from "./UglyThings"

class Form extends React.Component {
    state = {
        title: "",
        img: "",
        description:""
    }
    HandleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <form>
                <UglyThingsConsumer>
                    {({ addU }) => (
                        <div>
                            <input
                            id="title"
                            placeholder="Title"
                            name="title"
                            onChange={this.HandleChange}/>
                            <input
                            id="img"
                            placeholder="Img Url"
                            name="img"
                            onChange={this.HandleChange}/>
                            <input
                            id="description"
                            placeholder="description"
                            name="description"
                            onChange={this.HandleChange}/>
                            <button onClick={(event) => {
                                event.preventDefault();
                                const ug = {
                                    img: this.state.img,
                                    title: this.state.title,
                                    description: this.state.description
                                } 
                                addU(ug)
                            }} id="submit">Add
                            </button>
                                
                        </div>
                                )}

                </UglyThingsConsumer>
            </form>
        )
    }
}


export default Form