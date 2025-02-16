import React, { Component } from 'react'
import { UserConsumer } from './Context'

class CompC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <>Hello {username}</>
                    }
                }
            </UserConsumer>
        )
    }
}

export default CompC
