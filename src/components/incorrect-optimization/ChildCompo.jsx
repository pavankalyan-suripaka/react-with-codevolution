import React, { memo } from 'react'
import ChildA from './ChildA';

const ChildCompo = memo(({ children, name }) => {

    console.log("Child");

    return (
        <div>
            <p>{children} {name}</p>
            <ChildA />
        </div>
    )
}
)
export default ChildCompo
