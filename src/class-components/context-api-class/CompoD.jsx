import React, { Component } from 'react'
import UserContext from './Context'

export class CompoD extends Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                Hello {this.context} from component D
            </div>
        )
    }
}

// CompoD.contextType = UserContext;

export default CompoD
