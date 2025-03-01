import React, { useEffect, useRef } from 'react'

// using useRef() hook we can directly access DOM node elements in functional components.

const FocusInput = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        // focus input element
        // console.log()
        inputRef.current.focus()
    }, [])

    return (
        <>
            <input ref={inputRef} type="text" />
        </>
    )
}

export default FocusInput
