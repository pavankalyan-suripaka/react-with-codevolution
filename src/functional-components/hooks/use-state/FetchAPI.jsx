import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchAPI = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
            setLoading(false);
            setError('')
        } catch (error) {
            setError('Something went wrong');
            setLoading(false);
            setPosts([]);
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <div>
            {loading && !error ? 'Loading...' : posts[0]?.title}
            {error ? error : null}
        </div>
    )
}

export default FetchAPI
