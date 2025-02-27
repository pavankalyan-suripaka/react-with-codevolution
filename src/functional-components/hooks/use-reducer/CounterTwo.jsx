import React, { useReducer } from 'react'

// when onitial  state is object

const initialState = {
    counterOne: 0,
    counterTwo: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment1":
            return { ...state, counterOne: state.counterOne + action.value };
        case "decrement1":
            return { ...state, counterOne: state.counterOne - action.value };
        case "increment2":
            return { ...state, counterTwo: state.counterTwo + action.value };
        case "decrement2":
            return { ...state, counterTwo: state.counterTwo - action.value }
        case "reset":
            return state;
    }
}

const CounterTwo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            {state.counterOne}<br />
            {state.counterTwo}<br />
            <button onClick={() => dispatch({ type: "increment1", value: 5 })}>Increment1</button>
            <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>Decrement1</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "increment2", value: 10 })}>Increment2</button>
            <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>Decrement2</button>
        </>
    )
}

export default CounterTwo
