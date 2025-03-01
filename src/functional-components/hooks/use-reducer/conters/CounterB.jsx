import React, { useContext } from 'react'
import { PostContext } from '../Context';

const CounterB = () => {
    const { countState, countDispatch } = useContext(PostContext);
    return (
        <div>
            <div>{countState.counter}</div>
            <button onClick={() => countDispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => countDispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => countDispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default CounterB
