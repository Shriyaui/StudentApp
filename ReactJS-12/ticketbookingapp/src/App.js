// App.js - Main App Component with Conditional Rendering
import React, { Component } from 'react';
import './App.css';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    // Handle login
    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
        alert('✅ You have successfully logged in!');
    };

    // Handle logout
    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
        alert('👋 You have been logged out.');
    };

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div className="App">
                <header style={{
                    backgroundColor: '#2c3e50',
                    padding: '20px',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h1 style={{ margin: '0' }}>✈️ Flight Ticket Booking</h1>
                    <p style={{ margin: '5px 0 0 0', color: '#bdc3c7' }}>
                        {isLoggedIn ? '👤 Logged in as User' : '👋 Guest Mode'}
                    </p>
                </header>

                {/* Conditional Rendering: Show different pages based on login status */}
                {isLoggedIn ? (
                    <UserPage onLogout={this.handleLogout} />
                ) : (
                    <GuestPage onLogin={this.handleLogin} />
                )}

                <footer style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    marginTop: '30px'
                }}>
                    <p style={{ margin: '0' }}>
                        © 2024 Flight Booking App | 
                        {isLoggedIn ? ' Logged In' : ' Guest Mode'}
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;