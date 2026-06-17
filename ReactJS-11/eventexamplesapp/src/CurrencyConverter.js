// CurrencyConverter.js - Currency Converter Component
import React, { Component } from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rupees: '',
            euros: '',
            convertedValue: null
        };
        // Binding this to methods
        this.handleRupeesChange = this.handleRupeesChange.bind(this);
        this.handleEurosChange = this.handleEurosChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertRupeesToEuros = this.convertRupeesToEuros.bind(this);
        this.convertEurosToRupees = this.convertEurosToRupees.bind(this);
    }

    // Handle input change for Rupees
    handleRupeesChange(event) {
        this.setState({
            rupees: event.target.value,
            convertedValue: null
        });
    }

    // Handle input change for Euros
    handleEurosChange(event) {
        this.setState({
            euros: event.target.value,
            convertedValue: null
        });
    }

    // Convert Rupees to Euros (1 Euro = 90 INR)
    convertRupeesToEuros() {
        const { rupees } = this.state;
        if (rupees && !isNaN(rupees)) {
            const euros = (parseFloat(rupees) / 90).toFixed(2);
            this.setState({
                convertedValue: `${rupees} INR = ${euros} EUR`
            });
        } else {
            alert('Please enter a valid amount in Rupees');
        }
    }

    // Convert Euros to Rupees (1 Euro = 90 INR)
    convertEurosToRupees() {
        const { euros } = this.state;
        if (euros && !isNaN(euros)) {
            const rupees = (parseFloat(euros) * 90).toFixed(2);
            this.setState({
                convertedValue: `${euros} EUR = ${rupees} INR`
            });
        } else {
            alert('Please enter a valid amount in Euros');
        }
    }

    // Handle form submit
    handleSubmit(event) {
        event.preventDefault();
        const { rupees, euros } = this.state;
        
        if (rupees) {
            this.convertRupeesToEuros();
        } else if (euros) {
            this.convertEurosToRupees();
        } else {
            alert('Please enter a value to convert');
        }
    }

    render() {
        return (
            <div style={{
                maxWidth: '600px',
                margin: '20px auto',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#2c3e50',
                    borderBottom: '2px solid #3498db',
                    paddingBottom: '10px'
                }}>
                    💱 Currency Converter
                </h2>
                <p style={{ textAlign: 'center', color: '#7f8c8d' }}>
                    Exchange Rate: 1 EUR = 90 INR
                </p>

                <form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Indian Rupees (INR):
                        </label>
                        <input
                            type="number"
                            value={this.state.rupees}
                            onChange={this.handleRupeesChange}
                            placeholder="Enter amount in Rupees"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Euros (EUR):
                        </label>
                        <input
                            type="number"
                            value={this.state.euros}
                            onChange={this.handleEurosChange}
                            placeholder="Enter amount in Euros"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            padding: '12px',
                            fontSize: '18px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        🔄 Convert
                    </button>
                </form>

                {/* Display converted value */}
                {this.state.convertedValue && (
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#e8f4f8',
                        borderRadius: '8px',
                        textAlign: 'center',
                        border: '1px solid #3498db'
                    }}>
                        <h3 style={{ color: '#2c3e50' }}>Conversion Result:</h3>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2980b9' }}>
                            {this.state.convertedValue}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default CurrencyConverter;