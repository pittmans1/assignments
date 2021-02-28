import React from "react"
import Pet from "./Pet"
import Friend from "./Friend"




function FriendsList(props){
    const petlist = props.pets.map((pet, i) => <Friend key={pet.name + i} name={pet.name} breed={pet.breed} />)
    return(
        <div className="friend">
            <h3 style={{fontFamily:"cursive", color:"turquoise"}} key={props.name}>My name is {props.name}</h3>
            <p>I am {props.age} years old.
            - My perfect pets are {petlist}</p>
            <hr/>
        </div>
    )
}




export default FriendsList
