import React, { Component } from 'react';
import HocComponent from './HocComponent';

export class HoverCounter extends Component {
    render() {
        const { count, increCounter } = this.props;
        return (
            <div>
                <button onMouseOver={increCounter}>Hover {count} Times</button>
            </div>
        )
    }
}

export default HocComponent(HoverCounter);
