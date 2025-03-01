import React, { useState } from 'react'

const initState = {
    fname: "pavan",
    lname: "kalyan"
}

const ObjectUseState = () => {

    const [person, setPerson] = useState(initState);

    const clickHandler = () => {
        // person.fname = "pk"
        // person.lname = "s"
        const newName = { ...person }
        newName.fname = "pk"
        newName.lname = "s"
        setPerson(newName);
    }

    console.log("ObjectUseState is rendered");

    return (
        <div>
            <button onClick={clickHandler}>{person.fname}  {person.lname}</button>
        </div>
    )
}

export default ObjectUseState
