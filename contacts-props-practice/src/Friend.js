import React from "react"
import Pet from "./Pet"

function Friend(props){

    return(
        <div>
            <li style={{fontFamily: "cursive"}} className = "petlist">Name: {props.name}, Breed: {props.breed}</li>
        </div>
    )
}

export default Friend