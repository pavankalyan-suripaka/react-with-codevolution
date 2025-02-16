import React, { Component } from 'react'

class ComponentUpdateB extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
    console.log("constructor from ComponentUpdateB")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDirivedStateFromProps from ComponentUpdateB");
    return null;
  }

  componentDidMount = () => {
    console.log("componentDidMount from ComponentUpdateB")
  }

  
  componentShouldUpdate = ()=>{
    console.log("componentShouldUpdate from ComponentUpdateB");
    return true
  }

  getSnapshotBeforeUpdate = ()=>{
    console.log("getSnapshotBeforeUpdate from ComponentUpdateB");
  }

  componentDidUpdate = () => {
    console.log("componentDidUpdate from ComponentUpdateB")
  }

  render() {
    console.log("render from ComponentUpdateB")
    return (
      <div>
        <h3>ComponentUpdateB</h3>
      </div>
    )
  }
}

export default ComponentUpdateB
