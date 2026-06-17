// Counter.js - Counter Component with Event Handling
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // Binding this to the method
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // Method to increment count
    increment() {
        this.setState({
            count: this.state.count + 1
        });
        this.sayHello();
    }

    // Method to decrement count
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    // Additional method called from increment
    sayHello() {
        alert('Hello! Counter value increased!');
    }

    // Method with parameter
    sayWelcome(message) {
        alert(message);
    }

    // Synthetic event handler
    handleClick = (event) => {
        alert('I was clicked!');
        console.log('Synthetic Event:', event);
    }

    render() {
        return (
            <div style={{
                maxWidth: '600px',
                margin: '20px auto',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                    🔢 Counter with Events
                </h2>
                
                <div style={{ margin: '30px 0' }}>
                    <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#2c3e50' }}>
                        {this.state.count}
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* Increment button - calls multiple methods */}
                    <button 
                        onClick={this.increment}
                        style={{
                            backgroundColor: '#27ae60',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        ➕ Increment
                    </button>

                    {/* Decrement button */}
                    <button 
                        onClick={this.decrement}
                        style={{
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        ➖ Decrement
                    </button>
                </div>

                <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
                    <h4 style={{ color: '#2c3e50' }}>Event Examples</h4>
                    
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* Button with parameter */}
                        <button 
                            onClick={() => this.sayWelcome('Welcome to React Events!')}
                            style={{
                                backgroundColor: '#f39c12',
                                color: 'white',
                                border: 'none',
                                padding: '10px 25px',
                                fontSize: '14px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            👋 Say Welcome
                        </button>

                        {/* Synthetic event button */}
                        <button 
                            onClick={this.handleClick}
                            style={{
                                backgroundColor: '#8e44ad',
                                color: 'white',
                                border: 'none',
                                padding: '10px 25px',
                                fontSize: '14px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            🖱️ Click Me (Synthetic)
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;