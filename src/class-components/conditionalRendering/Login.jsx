import React, { Component } from 'react'

// we have 4 approaches to do conditional rendering
// 1. if/else  2.element variables  3. ternary operator  4. short circute operator

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: true
        }
    }

    render() {

        // 4. short circute operator

        return this.state.isLogin && <div>welcome to pavankalyan</div>



        // 3. ternory operator

        // return(
        //     this.state.isLogin? <div>welcome to pavankalyan</div> : <div>welcome to guest</div>
        // )



        // 2. element variables
        // let message;

        // if (this.state.isLogin) {
        //     message = "welcome to pavankalyan"
        // } else {
        //     message = "welcome to guest"
        // }

        // return <div>{message}</div>



        // 1. if/else
        // if (this.state.isLogin) {
        //     return <div>welcome to pavankalyan</div>
        // } else {
        //     return <div>welcome to guest</div>
        // }
    }
}

export default Login
