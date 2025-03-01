import React, { memo } from 'react'

const Count = memo(({ text, value }) => {
    console.log(`rendering - ${text}`)
    return (
        <>
            <p>{text} - {value}</p>
        </>
    )
})

export default Count
