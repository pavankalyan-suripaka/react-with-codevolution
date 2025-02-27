import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    posts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: '',
                posts: action.payload
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                error: "Something went wrong",
                posts: []
            }
        default:
            return state;
    }
}

const FetchApi = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchPost = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({ type: "FETCH_SUCCESS", payload: response.data })
        } catch (error) {
            dispatch({ type: "FETCH_ERROR" })
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <>
            {state.loading ? 'Loading...' : state.posts[0].title}
            {state.error ? state.error : null}
        </>
    )
}

export default FetchApi;
