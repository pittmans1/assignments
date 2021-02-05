import React from "react"
import post from "./BlogPost"

function BlogList(props){
   // console.log(props)
  // const blog = post.map(blogs => <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>)
    return(
        <div>
            <h2 style={{fontWeight:"bold", fontFamily:"fantasy"}}>{props.title}</h2>
            <p>{props.subTitle}</p>
            <span class="author" style={{fontFamily:"fantasy"}}>posted by {props.author}</span>
            <time > on {props.date}</time>
            <hr/>
        </div>
    )
}




export default BlogList