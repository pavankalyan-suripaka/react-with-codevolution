import React, { memo } from 'react'

const Button = memo(({ handleClick, children }) => {
    console.log("rendering - button", children)
    return (
        <>
            <button onClick={handleClick}>{children}</button>
        </>
    )
})

export default Button;
