import React, { useContext, memo } from 'react'
import { CounterContext } from './CountProvider'

export const ChildA = memo(() => {
    console.log("Child A")
    return (
        <div>
            Child A
            <ChildB />
        </div>
    )
})


export const ChildB = () => {
    console.log("Child B")
    return (
        <div>
            Child B
            <ChildC />
        </div>
    )
}

export const ChildC = () => {
    const { count } = useContext(CounterContext);
    console.log("Child C")
    return (
        <div>
            Child C {count}
        </div>
    )
}
