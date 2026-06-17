// Cart.js - Cart Class Component
import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname: props.itemname || '',
            price: props.price || 0
        };
    }

    render() {
        return (
            <div style={{
                border: '1px solid #ccc',
                padding: '15px',
                margin: '10px 0',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    {this.state.itemname}
                </span>
                <span style={{ 
                    fontSize: '18px', 
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    backgroundColor: '#e8f4f8',
                    padding: '5px 15px',
                    borderRadius: '20px'
                }}>
                    ₹{this.state.price}
                </span>
            </div>
        );
    }
}

export default Cart;