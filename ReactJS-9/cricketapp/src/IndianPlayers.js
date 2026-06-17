// IndianPlayers.js - Indian Players Component
import React, { Component } from 'react';

class IndianPlayers extends Component {
    constructor(props) {
        super(props);
        // T20 Players array
        this.t20Players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Suryakumar Yadav', 'Hardik Pandya'];
        
        // Ranji Trophy Players array
        this.ranjiPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Shreyas Iyer', 'Ravindra Jadeja', 'R Ashwin'];
        
        // Merging arrays using ES6 spread operator
        this.allPlayers = [...this.t20Players, ...this.ranjiPlayers];
    }

    render() {
        // Using Destructuring to get Odd and Even team players
        const [firstPlayer, secondPlayer, ...remainingPlayers] = this.t20Players;
        
        // Destructuring for Odd Team (players at odd indices) and Even Team (players at even indices)
        const oddTeamPlayers = this.allPlayers.filter((_, index) => index % 2 === 0);
        const evenTeamPlayers = this.allPlayers.filter((_, index) => index % 2 !== 0);

        return (
            <div style={{
                maxWidth: '900px',
                margin: '20px auto',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#2c3e50',
                    borderBottom: '3px solid #f39c12',
                    paddingBottom: '10px'
                }}>
                    🇮🇳 Indian Cricket Players
                </h2>

                {/* Destructuring Example */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ color: '#2c3e50' }}>📝 Destructuring Example:</h4>
                    <p><strong>First Player:</strong> {firstPlayer}</p>
                    <p><strong>Second Player:</strong> {secondPlayer}</p>
                    <p><strong>Remaining T20 Players:</strong> {remainingPlayers.join(', ')}</p>
                </div>

                {/* Odd Team Players (Destructuring) */}
                <div style={{
                    display: 'inline-block',
                    width: '48%',
                    marginRight: '2%',
                    verticalAlign: 'top',
                    backgroundColor: '#e8f4f8',
                    padding: '15px',
                    borderRadius: '8px',
                    minHeight: '200px'
                }}>
                    <h4 style={{ textAlign: 'center', color: '#2980b9' }}>🔵 Odd Team Players</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {oddTeamPlayers.map((player, index) => (
                            <li key={index} style={{
                                padding: '8px',
                                borderBottom: '1px solid #ddd',
                                backgroundColor: index % 2 === 0 ? '#d1ecf1' : 'transparent'
                            }}>
                                {player}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Even Team Players (Destructuring) */}
                <div style={{
                    display: 'inline-block',
                    width: '48%',
                    verticalAlign: 'top',
                    backgroundColor: '#fdebd0',
                    padding: '15px',
                    borderRadius: '8px',
                    minHeight: '200px'
                }}>
                    <h4 style={{ textAlign: 'center', color: '#e67e22' }}>🟠 Even Team Players</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {evenTeamPlayers.map((player, index) => (
                            <li key={index} style={{
                                padding: '8px',
                                borderBottom: '1px solid #ddd',
                                backgroundColor: index % 2 === 0 ? '#fdebd0' : 'transparent'
                            }}>
                                {player}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Merged Arrays using Spread Operator */}
                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f1f9ec',
                    borderRadius: '8px',
                    border: '1px solid #27ae60'
                }}>
                    <h4 style={{ color: '#27ae60' }}>🔄 Merged All Players (T20 + Ranji Trophy)</h4>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center'
                    }}>
                        {this.allPlayers.map((player, index) => (
                            <span key={index} style={{
                                backgroundColor: '#27ae60',
                                color: 'white',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '14px'
                            }}>
                                {player}
                            </span>
                        ))}
                    </div>
                    <p style={{ marginTop: '10px', textAlign: 'center' }}>
                        <strong>Total Players:</strong> {this.allPlayers.length}
                    </p>
                </div>
            </div>
        );
    }
}

export default IndianPlayers;