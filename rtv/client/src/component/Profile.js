import React, {useContext} from "react"
import PostForm from "./PostForm"
import PostList from "./PostList"
import Post from "./Post"
import {UserContext} from "../context/UserProvider"

export default function Profile(){
    const{
        user:{username},
        addPost,
        post
    }= useContext(UserContext)
    return(
        <div className="profile">
            <h1>Welcome {username}!</h1>
            <h3>Make a Post</h3>
            <PostForm addPost={addPost}/>
            <h3>Your Post's</h3>
            <PostList post={post}/>
        </div>
    )
}