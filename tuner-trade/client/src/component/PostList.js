import React from "react"
import Post from "./Post"
import Mitsubishi from "./Mitsubishi"

export default function PostList(props){
    const {post, imgUrl, username} = props
    return(
        <div className="postMap">
            {post.map(post => <Post {...post} key={post._id} />)}
        </div>
    )
}