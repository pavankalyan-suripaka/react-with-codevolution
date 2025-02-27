import React, { useState } from 'react'

const Object = () => {

    const [input, setInput] = useState({
        name: "",
        age: ""
    })

    const changeHandler = (event) => {
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("input::", input)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" name='name' value={input.name} onChange={changeHandler} />
                <input type="text" name='age' value={input.age} onChange={changeHandler} />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Object
