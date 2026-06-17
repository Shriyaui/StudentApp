// App.js - Main App Component
import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true
        };
    }

    toggleComponent = () => {
        this.setState({
            showCounter: !this.state.showCounter
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
                    <h2 style={{ color: 'white', margin: 0 }}>⚡ Event Examples App</h2>
                    <button 
                        onClick={this.toggleComponent}
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
                        {this.state.showCounter ? '💱 Show Converter' : '🔢 Show Counter'}
                    </button>
                </div>

                <div style={{ padding: '20px' }}>
                    {this.state.showCounter ? <Counter /> : <CurrencyConverter />}
                </div>
            </div>
        );
    }
}

export default App;