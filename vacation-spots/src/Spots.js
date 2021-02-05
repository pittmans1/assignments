import React from "react"

function Spots(props){
    return(
        <div>
            <h1>{props.spots.place}</h1>
            <p>{props.spots.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <h4>{props.spots.timeToGo}</h4>
            <hr/>
        </div>
    )
}

export default Spots