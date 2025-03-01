import React, { useContext } from 'react'
import { ChildA } from './Children';
import { CounterContext } from './CountProvider';


const Parent = () => {

    const { count, setCount } = useContext(CounterContext);

    console.log("Parent")

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>count - {count}</button>
            <ChildA />
        </div>
    )
}

export default Parent
