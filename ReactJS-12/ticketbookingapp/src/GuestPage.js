// GuestPage.js - Guest Page Component
import React from 'react';
import flights from './FlightData';
import FlightCard from './FlightCard';

function GuestPage({ onLogin }) {
    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '20px'
        }}>
            <div style={{
                textAlign: 'center',
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                marginBottom: '30px',
                border: '1px solid #e74c3c'
            }}>
                <h2 style={{ color: '#e74c3c' }}>🔒 Guest Mode</h2>
                <p style={{ fontSize: '18px', color: '#7f8c8d' }}>
                    Please login to book tickets. Browse available flights below.
                </p>
                <button 
                    onClick={onLogin}
                    style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '12px 40px',
                        borderRadius: '5px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    🔑 Login to Book Tickets
                </button>
            </div>

            <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                ✈️ Available Flights
            </h2>

            {flights.map(flight => (
                <FlightCard 
                    key={flight.id} 
                    flight={flight} 
                    isLoggedIn={false}
                    onBook={() => alert('Please login to book tickets')}
                />
            ))}

            <div style={{
                textAlign: 'center',
                marginTop: '30px',
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px'
            }}>
                <p style={{ color: '#7f8c8d' }}>
                    👋 Browse flights as Guest. <button 
                        onClick={onLogin}
                        style={{
                            backgroundColor: 'transparent',
                            color: '#3498db',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            textDecoration: 'underline'
                        }}
                    >
                        Login
                    </button> to book tickets.
                </p>
            </div>
        </div>
    );
}

export default GuestPage;