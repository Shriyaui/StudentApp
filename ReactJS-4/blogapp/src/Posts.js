import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    loadPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            this.setState({
                posts: data,
                loading: false,
                error: null
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message
            });
            throw error;
        }
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, errorInfo) {
        alert(`Error: ${error.message}`);
        console.error('Error caught by componentDidCatch:', error, errorInfo);
    }

    render() {
        const { posts, loading, error } = this.state;

        if (loading) {
            return (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>Loading posts...</h1>
                </div>
            );
        }

        if (error) {
            return (
                <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                    <h1>Error: {error}</h1>
                </div>
            );
        }

        return (
            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center', color: '#333' }}>
                    Blog Posts
                </h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Posts;