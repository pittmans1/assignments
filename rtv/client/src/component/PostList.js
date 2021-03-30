import React from "react"
import Post from "./Post"

export default function PostList(props){
    const {post} = props
    return(
        <div className="postMap">
            {post.map(post => <Post {...post} key={post._id} />)}
        </div>
    )
}