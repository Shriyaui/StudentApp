// App.js - Main App Component with Routing
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetails from './TrainerDetails';
import trainers from './TrainersMock';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav style={{
                    backgroundColor: '#2c3e50',
                    padding: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        🏫 Cognizant Academy
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/" style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            🏠 Home
                        </Link>
                        <Link to="/trainers" style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            👨‍🏫 Trainers List
                        </Link>
                    </div>
                </nav>

                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
                        <Route path="/trainer/:id" element={<TrainerDetails trainers={trainers} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;