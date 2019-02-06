import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="userOutput">
            <p>My name is {props.name}. Here is Paragraph 1. It has some information about stuff.</p>
            <p>Here is Paragraph 2. It has some stuff about information.</p>
        </div>
    )
}


export default UserOutput; 