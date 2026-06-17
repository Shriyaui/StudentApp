// BookDetails.js - Book Details Component
import React from 'react';
import './styles.css';

function BookDetails({ book, onSelect }) {
    return (
        <div className="card" onClick={() => onSelect(book)}>
            <div className="card-icon">{book.image}</div>
            <h3 className="card-title">{book.title}</h3>
            <p className="card-author">by {book.author}</p>
            <div className="card-details">
                <span className="badge genre">{book.genre}</span>
                <span className="badge year">{book.year}</span>
            </div>
            <div className="card-footer">
                <span className="rating">⭐ {book.rating}/5</span>
                <span className="price">{book.price}</span>
            </div>
        </div>
    );
}

export default BookDetails;