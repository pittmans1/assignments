import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Main (props){
    return(
        <ThemeContextConsumer>
            {context =>(
                <div className={`${context.theme}-button`}>
                    <button onClick = {context.toggleTheme} className={`${context.theme}-theme`}>Switch the Theme</button>
                </div>

            )}

        </ThemeContextConsumer>
    )

}



export default Main