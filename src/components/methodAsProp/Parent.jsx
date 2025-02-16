import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "parent"
        }
        this.greet = this.greet.bind(this)
    }

    greet(child){
        this.setState({
            message:`Parent is clicking from ${child}`
        })
        console.log("clicked")
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <Child greet={this.greet}/>
            </div>
        )
    }
}

export default Parent
