// UserPage.js - User Page Component
import React, { useState } from 'react';
import flights from './FlightData';
import FlightCard from './FlightCard';

function UserPage({ onLogout }) {
    const [bookedFlights, setBookedFlights] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleBookFlight = (flight) => {
        if (bookedFlights.some(f => f.id === flight.id)) {
            setAlertMessage(`⚠️ You have already booked ${flight.airline} flight ${flight.flightNumber}`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        setBookedFlights([...bookedFlights, flight]);
        setAlertMessage(`✅ Successfully booked ${flight.airline} flight ${flight.flightNumber}`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#e8f4f8',
                borderRadius: '10px',
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                <div>
                    <h2 style={{ margin: '0', color: '#2c3e50' }}>👤 Welcome, User!</h2>
                    <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
                        You are logged in. Book your tickets now!
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: '#27ae60', fontWeight: 'bold' }}>
                        🎫 {bookedFlights.length} bookings
                    </span>
                    <button 
                        onClick={onLogout}
                        style={{
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            padding: '10px 25px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        🚪 Logout
                    </button>
                </div>
            </div>

            {/* Alert message - Conditional rendering */}
            {showAlert && (
                <div style={{
                    padding: '15px',
                    backgroundColor: alertMessage.includes('✅') ? '#d4edda' : '#f8d7da',
                    color: alertMessage.includes('✅') ? '#155724' : '#721c24',
                    border: `1px solid ${alertMessage.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
                    borderRadius: '5px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    {alertMessage}
                </div>
            )}

            <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #27ae60', paddingBottom: '10px' }}>
                ✈️ Available Flights
            </h2>

            {flights.map(flight => (
                <FlightCard 
                    key={flight.id} 
                    flight={flight} 
                    isLoggedIn={true}
                    onBook={handleBookFlight}
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
                    🎉 Enjoy booking your flights! <button 
                        onClick={onLogout}
                        style={{
                            backgroundColor: 'transparent',
                            color: '#e74c3c',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            textDecoration: 'underline'
                        }}
                    >
                        Logout
                    </button> to return to guest mode.
                </p>
            </div>
        </div>
    );
}

export default UserPage;