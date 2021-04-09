import React, {useState, useContext} from "react"
import {UserContext} from "../context/UserProvider"

const initInputs = {
    username:"",
    post:"",
    imgUrl:""
}

export default function PostForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addPost} = useContext(UserContext)
    

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }

    const {post, imgUrl}= inputs
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="post"
            value={post}
            onChange={handleChange}
            placeholder="What would you like to share?"
            />
            <input
            type="file"
            accept="image/*"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="Images" />
            <button>Post</button>
        </form>
    )
}