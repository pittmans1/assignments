import React from "react"
import FriendsList from "./FriendsList"
import Pet from "./Pet"





function App(){
    const friends = Pet.map(friend => <FriendsList name={friend.name} age={friend.age} pets={friend.pets}/> )
    return(
        <div>
            {friends}

        </div>
    ) 
}

export default App