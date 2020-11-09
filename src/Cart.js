import React, { Component } from 'react';
import Total from './Total'
import './App.css';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Cart extends Component {
    render() {
    
        const selectedFeatures = Object.keys(this.props.state).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const featuredOption = this.props.state[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{featuredOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(featuredOption.cost)}
                    </div>
                </div>
            );
        });

        return (
            <section className="main_summary">
                <h2>Your Cart</h2>
                    {selectedFeatures}
                <Total cartContents={this.props.state} />
            </section>
        )
    }
}

export default Cart;