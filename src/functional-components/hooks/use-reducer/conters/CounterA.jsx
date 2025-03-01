import React from 'react'
import CounterB from './CounterB';
import PostProvider from '../Context';


const CounterA = () => {

    return (
        <div>
            <PostProvider>
                <CounterB />
            </PostProvider>
        </div>
    )
}

export default CounterA
