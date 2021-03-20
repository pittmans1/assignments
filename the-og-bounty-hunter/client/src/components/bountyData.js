import React, { useState } from "react"
import AddBountyForm from "./AddBounty.js"


export default function Bounty(props){
        const {firstName, lastName, bounty, living, type, _id} = props
        const [ editToggle, setEditToggle] = useState(false)
    return(
        <div>
            { !editToggle ?
            <>
            <h1> First name: {firstName}  Last name: {lastName}</h1>
            <p>Status:{living ? "Alive" : "Dead"} bounty:$ {bounty} type: {type ? "Jedi" : "Sith"}</p>
            <button onClick={() => props.deleteBounty(_id)}>Delete</button>
            <button 
            onClick={()=> setEditToggle(prevToggle => !prevToggle)}
            >Edit</button>
                </>
                :
                <>
            <AddBountyForm 
            firstName={firstName}
            lastName={lastName}
            living={living}
            bounty={bounty}
            type={type}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editBounty}
            />
            <button
             onClick={()=> setEditToggle(prevToggle => !prevToggle)}
            >close</button>
            </>
}
        </div>
    )
}