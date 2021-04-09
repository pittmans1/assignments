import React, {useContext} from "react"
import PostForm from "./PostForm"
import PostList from "./PostList"
import UserContext from "../context/UserProvider"

export default function Mitsubishi(props){
    const {post, imgUrl, comment, username}= props

return(
<div className="post">
    <PostForm/>
    <PostList/>
    <h6 style={{color: "royalblue"}}>{username}</h6>
    <h3 style={{color:"white"}}>{post}</h3>
    <img src={imgUrl} alt={imgUrl} width={175}/>
    <h6>{comment}</h6>
    <hr/>
    
</div>
)
}