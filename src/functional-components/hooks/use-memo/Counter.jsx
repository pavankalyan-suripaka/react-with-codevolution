import React, { useMemo, useState } from 'react'

const Counter = () => {

    // when ever state changed component would re-render so it executes all functions everytime
    // To prevent this un necessory re-renderning for long calculations we use useMemo() hook for performance optimization.

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incConterOne = () => {
        setCounterOne((prevCount => prevCount + 1));
    }

    // useMemo() hook memorizes the result of the function
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])

    const incConterTwo = () => {
        setCounterTwo(prevCount => prevCount + 1);
    }

    return (
        <>
            <div>
                <div>
                    <span> {counterOne}</span> &nbsp;
                    <span>{isEven ? 'Even' : 'Odd'}</span>
                </div>
                <button onClick={incConterOne}>counter one</button>
            </div>
            <div>
                <p>{counterTwo}</p>
                <button onClick={incConterTwo}>counter two</button>
            </div>
        </>
    )
}

export default Counter
