import React from "react"
import BlogList from "./BlogList"
import Header from "./Header"
import Footer from "./Footer"
import post from "./BlogPost"

function App(){
    const blogs = post.map(post => <BlogList title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>)

    return (
        <div>
            <Header />
            {blogs} 
            <Footer />
        </div>
    )
}

export default App