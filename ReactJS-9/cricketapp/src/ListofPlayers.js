// ListofPlayers.js - List of Players Component
import React, { Component } from 'react';

class ListofPlayers extends Component {
    constructor(props) {
        super(props);
        // Array with 11 players using map feature
        this.state = {
            players: [
                { name: 'Virat Kohli', score: 85 },
                { name: 'Rohit Sharma', score: 92 },
                { name: 'KL Rahul', score: 45 },
                { name: 'Suryakumar Yadav', score: 78 },
                { name: 'Hardik Pandya', score: 55 },
                { name: 'Jasprit Bumrah', score: 20 },
                { name: 'Ravindra Jadeja', score: 65 },
                { name: 'Shubman Gill', score: 95 },
                { name: 'Ishan Kishan', score: 38 },
                { name: 'Axar Patel', score: 72 },
                { name: 'Mohammed Siraj', score: 15 }
            ]
        };
    }

    render() {
        // Using map() to display all players
        const allPlayers = this.state.players.map((player, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{index + 1}</td>
                <td style={{ padding: '10px' }}>{player.name}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                    <span style={{
                        backgroundColor: player.score >= 70 ? '#27ae60' : '#e74c3c',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '14px'
                    }}>
                        {player.score}
                    </span>
                </td>
            </tr>
        ));

        // Using arrow functions to filter players with score below 70
        const below70Players = this.state.players
            .filter(player => player.score < 70)
            .map((player, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px' }}>{index + 1}</td>
                    <td style={{ padding: '10px' }}>{player.name}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                        <span style={{
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '14px'
                        }}>
                            {player.score}
                        </span>
                    </td>
                </tr>
            ));

        return (
            <div style={{
                maxWidth: '800px',
                margin: '20px auto',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#2c3e50',
                    borderBottom: '3px solid #3498db',
                    paddingBottom: '10px'
                }}>
                    🏏 Cricket Team - All Players
                </h2>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '15px'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
                            <th style={{ padding: '12px' }}>#</th>
                            <th style={{ padding: '12px' }}>Player Name</th>
                            <th style={{ padding: '12px' }}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPlayers}
                    </tbody>
                </table>

                <h3 style={{
                    textAlign: 'center',
                    color: '#e74c3c',
                    marginTop: '30px',
                    borderTop: '2px solid #eee',
                    paddingTop: '20px'
                }}>
                    ⚠️ Players with Score Below 70
                </h3>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '15px'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#e74c3c', color: 'white' }}>
                            <th style={{ padding: '12px' }}>#</th>
                            <th style={{ padding: '12px' }}>Player Name</th>
                            <th style={{ padding: '12px' }}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {below70Players.length > 0 ? below70Players : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                                    No players with score below 70
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListofPlayers;