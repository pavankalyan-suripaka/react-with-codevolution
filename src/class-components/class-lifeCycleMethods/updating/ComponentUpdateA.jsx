import React, { Component } from 'react'
import ComponentUpdateB from './ComponentUpdateB';

class ComponentUpdateA extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'Hi'
    }
    console.log("constructor from ComponentUpdateA")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDirivedStateFromProps from ComponentUpdateA");
    return null;
  }

  componentDidMount = () => {
    console.log("componentDidMount from ComponentUpdateA")
  }

  componentShouldUpdate = ()=>{
    console.log("componentShouldUpdate from ComponentUpdateA");
    return true;
  }

  getSnapshotBeforeUpdate = ()=>{
    console.log("getSnapshotBeforeUpdate from ComponentUpdateA");
    return null;
  }

  componentDidUpdate = () => {
    console.log("componentDidUpdate from ComponentUpdateA")
  }

  updateMessageHandler=()=>{
    this.setState({
      message:"Hello"
    })
  }

  render() {
    console.log("render from ComponentUpdateA")
    return (
      <div>
        <h3>ComponentUpdateA</h3>
        <h2>{this.state.message}</h2>
        <button type='submit' onClick={this.updateMessageHandler}>Update</button>
        <ComponentUpdateB />
      </div>
    )
  }
}

export default ComponentUpdateA
