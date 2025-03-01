import React, { useState } from 'react'
import ChildCompo from './ChildCompo';

const ParentComp = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Pavan");

    console.log("Parent")

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>count - {count}</button>
            <button onClick={() => setName("Kalyan")}>Change Name</button>
            <ChildCompo name={name} ><strong>Hello</strong></ChildCompo>
        </div>
    )
}

export default ParentComp
