import React, { Component } from 'react'

class ComponentB extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: ''
    }
    console.log("constructor from ComponentB")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDirivedStateFromProps from ComponentB");
    return null;
  }

  componentDidMount = () => {
    console.log("componentDidMount from ComponentB")
  }

  render() {
    console.log("render from ComponentB")
    return (
      <div>
        <h3>ComponentB</h3>
      </div>
    )
  }
}

export default ComponentB
