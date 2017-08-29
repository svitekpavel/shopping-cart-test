import React from 'react';
import './styles.css';

class CartSummary extends React.Component {
  render() {
    const { summary } = this.props;

    const summaryLines = summary.items.map((item) => {
      return (
        <div className="cart-summary-line">
          <div className="cart-summary-item-label">{item.product}</div>
          <div className="cart-summary-item-count">{item.count} pcs</div>
          <div className="cart-summary-item-price">${item.price.toFixed(2)}</div>
          <div className="cart-summary-item-subprice">${item.subPrice.toFixed(2)}</div>
        </div>
      );
    })

    return (
      <div className="cart-summary-wrapper">
        <div className="cart-summary">
          {summaryLines}
          <div className="cart-summary-line">
            <div className="cart-summary-label">Total price</div>
            <div className="cart-summary-item-totalprice">${summary.totalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
