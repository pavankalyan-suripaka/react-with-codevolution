import React, { Component } from 'react';
import HocComponent from './HocComponent';

export class ClickCounter extends Component {
    render() {
        const { count, increCounter } = this.props
        return (
            <div>
                <button onClick={increCounter}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default HocComponent(ClickCounter)
