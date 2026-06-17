// OnlineShopping.js - OnlineShopping Class Component
import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [
                { itemname: 'Laptop', price: 45000 },
                { itemname: 'Mobile Phone', price: 25000 },
                { itemname: 'Headphones', price: 2000 },
                { itemname: 'Smart Watch', price: 8000 },
                { itemname: 'Tablet', price: 18000 }
            ]
        };
    }

    render() {
        return (
            <div style={{
                maxWidth: '600px',
                margin: '50px auto',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    color: '#2c3e50',
                    borderBottom: '3px solid #3498db',
                    paddingBottom: '15px'
                }}>
                    🛒 Online Shopping Cart
                </h1>
                <div style={{ marginTop: '20px' }}>
                    {this.state.cartItems.map((item, index) => (
                        <Cart 
                            key={index}
                            itemname={item.itemname}
                            price={item.price}
                        />
                    ))}
                </div>
                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#e8f4f8',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50' }}>
                        Total Items: {this.state.cartItems.length}
                    </p>
                </div>
            </div>
        );
    }
}

export default OnlineShopping;