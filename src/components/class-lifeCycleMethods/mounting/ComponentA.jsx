import React, { Component } from 'react'
import ComponentB from './ComponentB';

class ComponentA extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
    console.log("constructor from ComponentA")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDirivedStateFromProps from ComponentA");
    return null;
  }

  componentDidMount = () => {
    console.log("componentDidMount from ComponentA")
  }

  render() {
    console.log("render from ComponentA")
    return (
      <div>
        <h3>ComponentA</h3>
        <ComponentB />
      </div>
    )
  }
}

export default ComponentA
