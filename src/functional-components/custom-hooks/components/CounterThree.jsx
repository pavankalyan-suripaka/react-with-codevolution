import React from 'react'
import useCounter from '../useCounterHook';

const CounterThree = () => {

    const [count, increment, decrement, reset] = useCounter(0, 5)

    return (
        <div>
            <p>Count - {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
            <button onClick={reset}>Increment</button>
        </div>
    )
}

export default CounterThree;
