import React, {useState} from "react"

const initInputs = {
    post:"",
    imgUrl:""
}

export default function PostForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addPost} = props

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
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="Image URL" />
            <button>Post</button>
        </form>
    )
}