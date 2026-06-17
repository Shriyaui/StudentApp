// TrainerDetails.js - Trainer Details Component
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function TrainerDetails({ trainers }) {
    const { id } = useParams();
    const trainer = trainers.find(t => t.trainerId === parseInt(id));

    if (!trainer) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Trainer not found!</h2>
                <Link to="/trainers">Back to Trainers List</Link>
            </div>
        );
    }

    return (
        <div style={{ 
            padding: '20px', 
            maxWidth: '600px', 
            margin: '0 auto',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>
                👤 Trainer Details
            </h2>
            <div style={{ padding: '20px' }}>
                <p><strong>Trainer ID:</strong> {trainer.trainerId}</p>
                <p><strong>Name:</strong> {trainer.name}</p>
                <p><strong>Email:</strong> {trainer.email}</p>
                <p><strong>Phone:</strong> {trainer.phone}</p>
                <p><strong>Technology:</strong> {trainer.technology}</p>
                <p><strong>Skills:</strong></p>
                <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    {trainer.skills.map((skill, index) => (
                        <li key={index} style={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px'
                        }}>
                            {skill}
                        </li>
                    ))}
                </ul>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/trainers" style={{
                        textDecoration: 'none',
                        backgroundColor: '#3498db',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        display: 'inline-block'
                    }}>
                        ← Back to Trainers List
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrainerDetails;