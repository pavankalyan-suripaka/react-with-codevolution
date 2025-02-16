import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    render() {
        console.log("********* PureComp component************")
        return (
            <div>
                <h1>PureComp {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp
