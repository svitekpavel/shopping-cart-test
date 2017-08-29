import React from 'react';
import Product from '../Product';
import * as utils from '../../utils';
import IconApple from '../../assets/apple.png';
import IconBanana from '../../assets/banana.png';
import IconOrange from '../../assets/orange.png';
import IconPapaya from '../../assets/papaya.png';
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
    const { cart } = this.props;

    return (
      <div className="product-table">
        <Product
          title="Apple"
          icon={IconApple}
          count={utils.getProductCountFromCart(cart, 'Apple')}
          onAdd={this.handleAddApple}
          onRemove={this.handleRemoveApple}
        />
        <Product
          title="Banana"
          icon={IconBanana}
          count={utils.getProductCountFromCart(cart, 'Banana')}
          onAdd={this.handleAddBanana}
          onRemove={this.handleRemoveBanana}
        />
        <Product
          title="Orange"
          icon={IconOrange}
          count={utils.getProductCountFromCart(cart, 'Orange')}
          onAdd={this.handleAddOrange}
          onRemove={this.handleRemoveOrange}
        />
        <Product
          title="Papaya"
          icon={IconPapaya}
          count={utils.getProductCountFromCart(cart, 'Papaya')}
          onAdd={this.handleAddPapaya}
          onRemove={this.handleRemovePapaya}
        />
      </div>
    );
  }
}

export default ProductTable;
