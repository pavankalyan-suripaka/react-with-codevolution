import React, { Component } from 'react';
import CompB from './CompoB';
import CompoD from './CompoD';

export class CompA extends Component {
    render() {
        return (
            <>
                <CompB />
                <CompoD />
            </>
        )
    }
}

export default CompA
