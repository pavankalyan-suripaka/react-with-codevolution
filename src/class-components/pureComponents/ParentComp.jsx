import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

export class ParentComp extends Component {

    // pure component definition:
    // when ever props or state changes then only pure component re-renders component 
    // it compares previous state and props references whether it being changed

    constructor(props) {
        super(props);

        this.state = {
            name: "pavan"
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            // it will not re-render pure component beacause state is same
            this.setState({
                name: "pavan"
            })

            // it will re-render pure component beacuase state is changed
            // this.setState({
            //     name: "pavans"
            // })
        }, 2000);
    }

    render() {
        console.log("********* Parent component************")
        return (
            <div>
                <h1>ParentComp</h1>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
