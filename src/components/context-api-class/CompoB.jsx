import React, { Component } from 'react'
import CompC from './CompoC'

class CompB extends Component {
    render() {
        return (
            <div>
                <CompC />
            </div>
        )
    }
}

export default CompB
