import React, { Component } from 'react'

class RegComp extends Component {

    render() {
        console.log("********* RegComp component************")
        return (
            <div>
                <h1>RegComp {this.props.name}</h1>
            </div>
        )
    }
}

export default RegComp
