import React from 'react';
import Button from '../Button';
import AmazonLogo from '../../assets/amazon-logo.png';
import './styles.css';

class ShopHeader extends React.Component {
  render() {
    return (
      <div className="shop-header">
        <div className="shop-logo">
          <img src={AmazonLogo} />
        </div>
      </div>
    );
  }
}

export default ShopHeader;
