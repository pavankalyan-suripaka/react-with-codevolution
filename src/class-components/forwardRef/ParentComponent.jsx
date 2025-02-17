import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.childInputRef = React.createRef();
    }

    clickHandler = () => {
        // accessing child component directly using forwardRef concept
        this.childInputRef.current.focus();
    }

    render() {
        return (
            <div>
                <ChildComponent ref={this.childInputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentComponent
