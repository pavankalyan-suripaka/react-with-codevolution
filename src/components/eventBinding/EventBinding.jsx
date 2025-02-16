import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: "oyyyyyyyyyy"
        })
    }


    // using arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message: "oyyyyyyyyyy"
    //     })
    // }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
