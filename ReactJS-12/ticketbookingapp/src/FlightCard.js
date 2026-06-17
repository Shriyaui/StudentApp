// FlightCard.js - Flight Card Component
import React from 'react';

function FlightCard({ flight, isLoggedIn, onBook }) {
    const { airline, flightNumber, from, to, departure, arrival, price, seats } = flight;

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px 0',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>
                    ✈️ {airline}
                </h3>
                <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
                    <strong>Flight:</strong> {flightNumber}
                </p>
                <p style={{ margin: '5px 0' }}>
                    <strong>From:</strong> {from} → <strong>To:</strong> {to}
                </p>
                <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
                    <strong>Departure:</strong> {departure} | <strong>Arrival:</strong> {arrival}
                </p>
            </div>
            <div style={{ textAlign: 'right', minWidth: '150px' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50', margin: '0' }}>
                    {price}
                </p>
                <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
                    🪑 {seats} seats left
                </p>
                {/* Conditional Rendering: Show book button only for logged-in users */}
                {isLoggedIn ? (
                    <button 
                        onClick={() => onBook(flight)}
                        style={{
                            backgroundColor: '#27ae60',
                            color: 'white',
                            border: 'none',
                            padding: '8px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        📌 Book Now
                    </button>
                ) : (
                    <button 
                        style={{
                            backgroundColor: '#bdc3c7',
                            color: '#7f8c8d',
                            border: 'none',
                            padding: '8px 20px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            cursor: 'not-allowed'
                        }}
                        disabled
                    >
                        🔒 Login to Book
                    </button>
                )}
            </div>
        </div>
    );
}

export default FlightCard;