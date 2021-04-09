import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState={
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        post:[],
        comment:[],
        message:[],
        errMsg:""
    }
    const [userState, setUserState]= useState(initState)

    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res =>{
            const{user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserPosts()
            //getComments()
           // getMessages()
            setUserState(prevUserState =>({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user:{},
            token:'',
            post:[],
            comment:[],
            message:[]
        })
    }
    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function restAuthError(){
        setUserState(prevState =>({
            ...prevState,
            errMsg:""
        }))
    }
    function getUserPosts(){
        userAxios.get('/api/post/user')
        .then(res=>{
            setUserState(prevState=>({
                ...prevState,
                post: res.data
            }))
        })
        .catch(err => console.log(err))
    }
    function addPost(newPost){
        userAxios.post('/api/post', newPost)
        .then(res =>{
            setUserState(prevState => ({
                ...prevState,
                post: [...prevState.post, res.data]
            }))
        })
        .catch(err => console.log(err))
    }
    function addComment(newComment){
        userAxios.post('/api/comment', newComment)
        .then(res =>{
            setUserState(prevState =>({
                ...prevState,
                comment:[...prevState.comment, res.data]
            }))
        })
    }
    return(
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login, 
            logout, 
            addPost, 
            addComment,
            restAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
}