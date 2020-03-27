import React, {Component} from "react"
import "./styles.css"

const Header = (props) =>{
    return (
        <header id="header">
            <h1>{props.children}</h1>
        </header>
    )
}

export default Header;