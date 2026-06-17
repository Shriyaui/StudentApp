// TrainersList.js - Trainers List Component
import React from 'react';
import { Link } from 'react-router-dom';

function TrainersList({ trainers }) {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>
                👨‍🏫 Trainers List
            </h2>
            <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center'
            }}>
                {trainers.map(trainer => (
                    <li key={trainer.trainerId} style={{ 
                        backgroundColor: '#f8f9fa',
                        padding: '15px 25px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s'
                    }}>
                        <Link 
                            to={`/trainer/${trainer.trainerId}`}
                            style={{
                                textDecoration: 'none',
                                color: '#3498db',
                                fontSize: '18px',
                                fontWeight: '500'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#2980b9';
                                e.target.parentElement.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#3498db';
                                e.target.parentElement.style.transform = 'scale(1)';
                            }}
                        >
                            {trainer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrainersList;