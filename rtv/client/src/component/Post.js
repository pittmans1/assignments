import React from "react"

export default function Post(props){
const {post, imgUrl, comment}= props

return(
    <div className="post">
        <h3>{post}</h3>
        <img src={imgUrl} alt={imgUrl} width={300}/>
        <h6>{comment}</h6>
    </div>
)
}