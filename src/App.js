import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    userName:  "Jack Cohen"
  }

  nameChangehandler = (event) =>{
    this.setState({
      userName:  event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changeName={this.nameChangehandler} 
          name={this.state.userName}/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
