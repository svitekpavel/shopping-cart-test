import React from 'react';
import './styles.css';

class Cart extends React.Component {
  render() {
    const { items } = this.props;

    const itemNodes = items.map(i => <li>{i.text}, {i.price}, {i.discount}</li>);

    return (
      <div className="notifications">
        <ul>
          {itemNodes}
        </ul>
      </div>
    );
  }
}

export default Cart;
