import React from 'react';
import AddButton from '../AddButton';
import RemoveButton from '../RemoveButton';
import Product from '../Product';
import './styles.css';

class ProductTable extends React.Component {
  constructor() {
    super();

    this.handleAddApple = this.handleAddProduct.bind(this, 'Apple');
    this.handleAddOrange = this.handleAddProduct.bind(this, 'Orange');
    this.handleAddBanana = this.handleAddProduct.bind(this, 'Banana');
    this.handleAddPapaya = this.handleAddProduct.bind(this, 'Papaya');
    this.handleRemoveApple = this.handleRemoveProduct.bind(this, 'Apple');
    this.handleRemoveOrange = this.handleRemoveProduct.bind(this, 'Orange');
    this.handleRemoveBanana = this.handleRemoveProduct.bind(this, 'Banana');
    this.handleRemovePapaya = this.handleRemoveProduct.bind(this, 'Papaya');
  }

  handleAddProduct = (name) => {
    const { onAddProduct } = this.props;
    onAddProduct(name);
  }

  handleRemoveProduct = (name) => {
    const { onRemoveProduct } = this.props;
    onRemoveProduct(name);
  }

  render() {

    return (
      <div className="product-table">
        <Product
          title="Apple"
          onAdd={this.handleAddApple}
          onRemove={this.handleRemoveApple}
        />
        <Product
          title="Banana"
          onAdd={this.handleAddBanana}
          onRemove={this.handleRemoveBanana}
        />
        <Product
          title="Orange"
          onAdd={this.handleAddOrange}
          onRemove={this.handleRemoveOrange}
        />
        <Product
          title="Papaya"
          onAdd={this.handleAddPapaya}
          onRemove={this.handleRemovePapaya}
        />
      </div>
    );
  }
}

export default ProductTable;
