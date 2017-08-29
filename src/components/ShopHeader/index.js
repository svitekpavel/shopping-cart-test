import React from 'react';
import AmazonLogo from '../../assets/amazon-logo.png';
import './styles.css';

class ShopHeader extends React.Component {
  render() {
    return (
      <div className="shop-header">
        <div className="shop-logo">
          <img src={AmazonLogo} alt="amazon logo" />
        </div>
      </div>
    );
  }
}

export default ShopHeader;
