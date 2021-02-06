import React from "react"

function Badge(props) {
    return (
         <div className="badge">
                 
             <h2 className="badge-title">Badge:</h2>
 
             <p>Name: {props.info.firstName} {props.info.lastName}</p>
 
             <p>Phone: {props.info.phone}</p>
 
             <p>Place of birth: {props.info.birthPlace}</p>
 
             <p>Favorite food: {props.info.favFood}</p>
 
             <p className="email">Email: {props.info.email}</p>
 
             <div className="about">{props.info.about}</div>
 
         </div>
    )
 }


export default Badge