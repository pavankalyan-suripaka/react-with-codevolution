import React, { Component } from "react";

const HocComponent = (OriginalComponent) => {

    class NewComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        increCounter = () => {
            // this.setState(prevState => {
            //     return { count: prevState.count + 1 }
            // })

            this.setState(prevState => (
                { count: prevState.count + 1 }
            ))
        }

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    increCounter={this.increCounter}
                    {...this.props}  /* This passes the remaining props from other components. Wherever we wrap the HOC, those props are forwarded to the wrapped component.*/
                />
            )
        }
    }
    return NewComponent;
}

export default HocComponent;