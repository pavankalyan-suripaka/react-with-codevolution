import React, { Component } from 'react'
import ChildCompo from './ChildCompo';

export class ParentCompo extends Component {

    constructor(props) {
        super(props);

        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        // call child component
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <ChildCompo ref={this.componentRef} />   {/* access child component ref using this parent ref */}
                <button onClick={this.clickHandler}>FoucsChildInput</button>
            </div>
        )
    }
}

export default ParentCompo
