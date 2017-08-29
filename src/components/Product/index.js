import React from 'react';
import AddButton from '../AddButton';
import RemoveButton from '../RemoveButton';
import './styles.css';

class Product extends React.Component {
  render() {
    const {
      children,
      count,
      icon,
      onAdd,
      onRemove,
    } = this.props;

    return (
      <div className="product-wrapper">
        <div className="product-icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="product-content">
          {children}
        </div>
        <div className="product-count">{count} {count === 1 ? 'pc' : 'pcs'}</div>
        <div className="product-buttons">
          <AddButton onClick={onAdd} />
          <RemoveButton onClick={onRemove} />
        </div>
      </div>
    );
  }
}

export default Product;
