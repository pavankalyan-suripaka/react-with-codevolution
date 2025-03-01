import React, { createContext, useReducer } from 'react';

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const initialState = {
        counter: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, counter: state.counter + 1 }
            case 'decrement':
                return { ...state, counter: state.counter - 1 }
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return <PostContext.Provider value={{ countState: state, countDispatch: dispatch }}>
        {children}
    </PostContext.Provider>
}

export default PostProvider
