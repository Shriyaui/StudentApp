import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div style={{
                border: '1px solid #ccc',
                padding: '15px',
                margin: '10px 0',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9'
            }}>
                <h3>Post ID: {post.id}</h3>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        );
    }
}

export default Post;