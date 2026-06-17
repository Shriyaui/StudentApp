// BlogDetails.js - Blog Details Component
import React from 'react';
import './styles.css';

function BlogDetails({ blog, onSelect }) {
    return (
        <div className="card blog-card" onClick={() => onSelect(blog)}>
            <div className="blog-header">
                <h3 className="card-title">{blog.title}</h3>
                <span className="category-badge">{blog.category}</span>
            </div>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <div className="blog-meta">
                <span>✍️ {blog.author}</span>
                <span>📅 {blog.date}</span>
            </div>
            <div className="blog-stats">
                <span>❤️ {blog.likes} likes</span>
                <span>💬 {blog.comments} comments</span>
            </div>
        </div>
    );
}

export default BlogDetails;