import React from 'react'

const UserInput = (props) => {
    const style = {
        font: 'inherit',
        border: '3px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    return (
        <input class="userInput" style={style} type="text" onChange={props.changeName} value={props.name}  />
    )
}


export default UserInput; 