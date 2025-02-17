import React, { Component } from 'react'

export class RefComp extends Component {

    // using reference(ref) we can access DOM
    // this ref gives current object using that we can access DOM

    constructor(props) {
        super(props);

        //1. create reference
        this.inputRef = React.createRef();
    }

    // 3. using lifecycle method focus input box when component renders
    componentDidMount = () => {
        console.log("this.inputRef::", this.inputRef)
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                {/* 2. attach that input reference to input  */}
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefComp
