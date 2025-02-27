import React, { useState } from 'react'
import MouseEvents from './MouseEvents'

const Index = () => {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Click</button>
            {display && <MouseEvents />}
        </div>
    )
}

export default Index
