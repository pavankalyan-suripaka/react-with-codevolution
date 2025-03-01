import React, { useState } from 'react'

const initState = ["pavan", "kalyan"]

const ArrayUseState = () => {

    const [person, setPerson] = useState(initState);

    const clickHandler = () => {
        const newName = [...person]
        newName.push("pk")
        newName.push("s")
        setPerson(newName);
    }

    console.log("ArrayUseState is rendered");

    return (
        <div>
            <button onClick={clickHandler}>click</button>
            {
                person.length && person.map(name => <div key={name}>{name}</div>)
            }
        </div>
    )
}

export default ArrayUseState;
