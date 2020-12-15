import React from "react";
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureOption extends React.Component {
    render() {
          return (
            <li className="feature__item">
              <div 
                className={this.props.featureClass}
                onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}>
                  { this.props.item.name }
                  {USCurrencyFormat.format(this.props.item.cost)}
              </div>
            </li>
        );
    }
}

export default FeatureOption; 