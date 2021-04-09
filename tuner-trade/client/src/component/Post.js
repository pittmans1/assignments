import React from "react"


export default function Post(props){
        const {post, imgUrl, comment, username, _id}= props
    return(
    <div className="post">
        <h6 style={{color: "royalblue"}}>{username}</h6>
        <h3 style={{color:"blue"}}>{post}</h3>
        <img src={imgUrl} alt={imgUrl} width={175}/>
        <h6>{comment}</h6>
        <hr/>
    </div>
    )
}