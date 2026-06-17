// App.js - Main App Component with Flag Toggle
import React, { Component } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true // Toggle between components
        };
    }

    toggleFlag = () => {
        this.setState({
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <div className="App">
                <div style={{
                    backgroundColor: '#2c3e50',
                    padding: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ color: 'white', margin: 0 }}>🏏 Cricket App</h2>
                    <button 
                        onClick={this.toggleFlag}
                        style={{
                            backgroundColor: '#f39c12',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                    >
                        {this.state.flag ? '📊 Show Indian Players' : '🏏 Show Players List'}
                    </button>
                </div>

                <div style={{ padding: '20px' }}>
                    {this.state.flag ? <ListofPlayers /> : <IndianPlayers />}
                </div>
            </div>
        );
    }
}

export default App;