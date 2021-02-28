import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"
function Footer(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-footer`}>
                    <h1>the outstanding fartastic {context.theme} theme!</h1>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer