// BloggerApp.js - Main Blogger App Component
import React, { Component } from 'react';
import bookData from './data/bookData';
import blogData from './data/blogData';
import courseData from './data/courseData';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

class BloggerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 'books', // 'books', 'blogs', 'courses'
            selectedItem: null,
            showDetail: false
        };
    }

    // Conditional Rendering Method 1: Element Variables
    renderCategoryButtons = () => {
        const categories = [
            { key: 'books', label: '📚 Books', icon: '📚' },
            { key: 'blogs', label: '📝 Blogs', icon: '✍️' },
            { key: 'courses', label: '🎓 Courses', icon: '🎓' }
        ];

        return categories.map(cat => (
            <button
                key={cat.key}
                className={`category-btn ${this.state.selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => this.handleCategoryChange(cat.key)}
            >
                {cat.label}
            </button>
        ));
    };

    // Conditional Rendering Method 2: Using if-else (via switch)
    renderContent = () => {
        const { selectedCategory, selectedItem, showDetail } = this.state;

        // Conditional Rendering Method 3: Early return
        if (showDetail && selectedItem) {
            return this.renderDetailView(selectedItem);
        }

        let data = [];
        let component = null;
        let title = '';

        // Using switch for conditional rendering
        switch (selectedCategory) {
            case 'books':
                data = bookData;
                component = BookDetails;
                title = '📚 Books Collection';
                break;
            case 'blogs':
                data = blogData;
                component = BlogDetails;
                title = '📝 Latest Blog Posts';
                break;
            case 'courses':
                data = courseData;
                component = CourseDetails;
                title = '🎓 Available Courses';
                break;
            default:
                data = bookData;
                component = BookDetails;
                title = '📚 Books Collection';
        }

        return (
            <div>
                <h2 className="section-title">{title}</h2>
                <p className="section-subtitle">
                    {data.length} items available • Click on any item to view details
                </p>
                <div className="cards-container">
                    {data.map(item => (
                        <div key={item.id}>
                            {React.createElement(component, {
                                [selectedCategory === 'books' ? 'book' : 
                                 selectedCategory === 'blogs' ? 'blog' : 'course']: item,
                                onSelect: this.handleItemSelect
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Conditional Rendering Method 4: Ternary operator for detail view
    renderDetailView = (item) => {
        const { selectedCategory } = this.state;

        return (
            <div className="detail-view">
                <button className="back-btn" onClick={this.handleBack}>
                    ← Back to List
                </button>
                <div className="detail-card">
                    <h2>{item.title}</h2>
                    {selectedCategory === 'books' && (
                        <div>
                            <p><strong>Author:</strong> {item.author}</p>
                            <p><strong>Genre:</strong> {item.genre}</p>
                            <p><strong>Year:</strong> {item.year}</p>
                            <p><strong>Rating:</strong> ⭐ {item.rating}/5</p>
                            <p><strong>Price:</strong> {item.price}</p>
                        </div>
                    )}
                    {selectedCategory === 'blogs' && (
                        <div>
                            <p><strong>Author:</strong> {item.author}</p>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Date:</strong> {item.date}</p>
                            <p><strong>Likes:</strong> ❤️ {item.likes}</p>
                            <p><strong>Comments:</strong> 💬 {item.comments}</p>
                            <p><strong>Excerpt:</strong> {item.excerpt}</p>
                        </div>
                    )}
                    {selectedCategory === 'courses' && (
                        <div>
                            <p><strong>Instructor:</strong> {item.instructor}</p>
                            <p><strong>Duration:</strong> {item.duration}</p>
                            <p><strong>Level:</strong> {item.level}</p>
                            <p><strong>Price:</strong> {item.price}</p>
                            <p><strong>Students:</strong> {item.students}</p>
                            <p><strong>Rating:</strong> ⭐ {item.rating}/5</p>
                            <p><strong>Topics:</strong> {item.topics.join(', ')}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    handleCategoryChange = (category) => {
        // Conditional Rendering Method 5: Using setState with condition
        this.setState({
            selectedCategory: category,
            showDetail: false,
            selectedItem: null
        });
    };

    handleItemSelect = (item) => {
        this.setState({
            selectedItem: item,
            showDetail: true
        });
    };

    handleBack = () => {
        this.setState({
            showDetail: false,
            selectedItem: null
        });
    };

    render() {
        // Conditional Rendering Method 6: Using && operator
        const { selectedCategory, showDetail } = this.state;

        return (
            <div className="blogger-app">
                <header className="app-header">
                    <h1>📖 Blogger App</h1>
                    <p>Explore Books, Blogs, and Courses</p>
                </header>

                <nav className="category-nav">
                    {/* Conditional Rendering Method 1: Element Variables */}
                    {this.renderCategoryButtons()}
                </nav>

                <main className="app-content">
                    {/* Conditional Rendering Method 6: && operator for loading/message */}
                    {!showDetail && (
                        <div className="category-indicator">
                            <span className="indicator-dot"></span>
                            Browse {selectedCategory === 'books' ? '📚 Books' : 
                                    selectedCategory === 'blogs' ? '📝 Blogs' : '🎓 Courses'}
                        </div>
                    )}

                    {/* Main content with multiple conditional rendering methods */}
                    {this.renderContent()}
                </main>

                <footer className="app-footer">
                    <p>© 2024 Blogger App | {bookData.length + blogData.length + courseData.length} items across 3 categories</p>
                </footer>
            </div>
        );
    }
}

export default BloggerApp;