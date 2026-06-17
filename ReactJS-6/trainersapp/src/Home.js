// Home.js - Home Component
import React from 'react';

function Home() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>🏫 Cognizant Academy</h1>
            <h2>Trainers Management System</h2>
            <p style={{ fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>
                Welcome to the Trainers Management System. 
                Click on "Trainers List" to view all trainers and their details.
            </p>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px',
                marginTop: '30px'
            }}>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    width: '200px'
                }}>
                    <h3>👨‍🏫 Total Trainers</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>6</p>
                </div>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    width: '200px'
                }}>
                    <h3>📚 Technologies</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>6</p>
                </div>
            </div>
        </div>
    );
}

export default Home;