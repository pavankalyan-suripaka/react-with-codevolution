import React, { Component } from 'react'
import ChildComp from "./ChildComp"

export class ParentComp extends Component {

    // React.memo() definition:
    // if we export functional component with React.memo() it will re-render only when state or props changes 
    // it compares previous state and props references whether it being changed
    // it works same like as pure component we use this in functional component

    constructor(props) {
        super(props);

        this.state = {
            name: "pavan"
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            // it will not re-render child component beacause state is same
            this.setState({
                name: "pavan"
            })

            // it will re-render child component beacuase state is changed
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
                <ChildComp/>
            </div>
        )
    }
}

export default ParentComp
