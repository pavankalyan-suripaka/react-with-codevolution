import React, { useState } from 'react'
import useDocumentTitle from '../useDocumentTitle';

const CounterTwo = () => {

    const [count, setCount] = useState(0);
    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Counter One</button>
        </div>
    )
}

export default CounterTwo;