// OfficeSpace.js - Office Space Component using JSX
import React from 'react';

// Office space data
const officeData = [
    {
        id: 1,
        name: 'Downtown Business Hub',
        rent: 45000,
        address: '123 Main Street, City Center',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Tech Park Plaza',
        rent: 75000,
        address: '456 Innovation Drive, Tech City',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Co-Working Space',
        rent: 35000,
        address: '789 Startup Street, Business District',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Corporate Tower',
        rent: 85000,
        address: '101 Corporate Avenue, Financial District',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Executive Suites',
        rent: 55000,
        address: '202 Executive Boulevard, Prime Location',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
    }
];

function OfficeSpace() {
    // JSX: Creating element to display heading
    const heading = <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50',
        borderBottom: '4px solid #3498db',
        paddingBottom: '15px',
        marginBottom: '30px'
    }}>🏢 Office Space Rental</h1>;

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Rendering JSX heading */}
            {heading}

            {/* Office Space List */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                padding: '10px'
            }}>
                {officeData.map((office) => {
                    // JSX: Inline CSS - Rent color based on value
                    const rentColor = office.rent < 60000 ? '#e74c3c' : '#27ae60';
                    
                    return (
                        <div key={office.id} style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s',
                            backgroundColor: '#ffffff'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            
                            {/* Image using JSX attributes */}
                            <img 
                                src={office.image} 
                                alt={office.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            
                            <div style={{ padding: '20px' }}>
                                <h3 style={{
                                    margin: '0 0 10px 0',
                                    color: '#2c3e50'
                                }}>{office.name}</h3>
                                
                                <p style={{
                                    margin: '8px 0',
                                    color: '#7f8c8d'
                                }}>
                                    📍 {office.address}
                                </p>
                                
                                {/* JSX: Inline CSS - Rent color based on condition */}
                                <p style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: rentColor,
                                    margin: '10px 0'
                                }}>
                                    ₹{office.rent.toLocaleString()}/month
                                </p>
                                
                                {/* JSX: Conditional rendering */}
                                <span style={{
                                    display: 'inline-block',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    backgroundColor: office.rent < 60000 ? '#fde8e8' : '#e8f8e8',
                                    color: rentColor,
                                    fontSize: '14px'
                                }}>
                                    {office.rent < 60000 ? '💲 Affordable' : '💎 Premium'}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OfficeSpace;