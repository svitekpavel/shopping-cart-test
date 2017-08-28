import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarInterior from '../components/CarInterior';
import ShopHeader from '../components/ShopHeader';
import NotificationsWrapper from '../components/NotificationsWrapper';
import Notifications from '../components/Notifications';
import ProductTable from '../components/ProductTable';
import TabletLoadingScreen from '../components/TabletLoadingScreen';
import TabletWrapper from '../components/TabletWrapper';
import TabletFooter from '../components/TabletFooter';
import Button from '../components/Button';
import CartSummary from '../components/CartSummary';
import * as cartActions from '../actions/cart';
import * as tabletActions from '../actions/tablet';
import * as notificationsActions from '../actions/notifications';
import * as utils from '../utils';

class App extends Component {
  handleAddItem = (item) => {
    const { dispatch } = this.props;

    dispatch(cartActions.addItem(item));
    dispatch(notificationsActions.addNotification(`${item} added.`));
  }

  handleRemoveItem = (item) => {
    const { dispatch } = this.props;

    dispatch(cartActions.removeItem(item));
    dispatch(notificationsActions.addNotification(`${item} removed.`));
  }

  handleCheckoutClicked = () => {
    const {
      cart,
      dispatch,
    } = this.props;

    const productCount = utils.getAllProductsCountFromCart(cart);
    if (productCount === 0) {
      dispatch(notificationsActions.addNotification(`There's no product in your basket..`));
      return;
    }

    dispatch(notificationsActions.addNotification(`Proceeding to checkout..`));

    dispatch(tabletActions.switchStep('loading'));
    setTimeout(() => dispatch(tabletActions.switchStep('summary')), 1000);
  }

  handleSubmitOrder = () => {
    const { dispatch } = this.props;
    dispatch(notificationsActions.addNotification(`Order successful!`));
    dispatch(tabletActions.switchStep('order-successful'));
  }

  handleContinueShoppingClicked = () => {
    const { dispatch } = this.props;
    dispatch(tabletActions.switchStep('shop'));
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    setTimeout(() => dispatch(notificationsActions.addNotification(`Welcome to Amazon Store for Tesla..`, 2500)), 1500);
    setTimeout(() => dispatch(notificationsActions.addNotification(`This is your heads-up display that will show store notifications..`, 3500)), 5000);
    setTimeout(() => dispatch(notificationsActions.addNotification(`Start adding goods to your basket..`, 2500)), 10000);

    setTimeout(() => dispatch(tabletActions.switchStep('shop')), 500);
  }

  renderTabletContent() {
    const {
      cart,
      step,
    } = this.props;

    if (step === 'loading') {
      return (
        <TabletLoadingScreen />
      );
    } else if (step === 'order-successful') {
      return (
        <div>
          <ShopHeader />
          <h3>Order successful!</h3>
          <TabletFooter>
            <Button
              primary
              onClick={this.handleContinueShoppingClicked}
            >Continue shopping</Button>
          </TabletFooter>
        </div>
      );
    } else if (step === 'shop') {
      return (
        <div>
          <ShopHeader />
          <ProductTable
            cart={cart}
            onAddProduct={this.handleAddItem}
            onRemoveProduct={this.handleRemoveItem}
          />
          <TabletFooter>
            <Button
              primary
              onClick={this.handleCheckoutClicked}
            >Proceed to checkout</Button>
          </TabletFooter>
        </div>
      );
    } else if (step === 'summary') {
      const summary = utils.createSummaryFromCart(cart);

      return (
        <div>
          <ShopHeader />
          <CartSummary summary={summary} />
          <TabletFooter>
            <Button
              primary
              onClick={this.handleSubmitOrder}
            >Submit and pay ${summary.totalPrice.toFixed(2)}</Button>
          </TabletFooter>
        </div>
      );
    }

    return (
      <div>You just hacked your Tesla :-)</div>
    );
  }

  render() {
    const {
      notifications,
    } = this.props;

    return (
      <CarInterior>
        <NotificationsWrapper>
          <Notifications notifications={notifications} />
        </NotificationsWrapper>
        <TabletWrapper>
          { this.renderTabletContent() }
        </TabletWrapper>
      </CarInterior>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    cart: state.cart,
    // summary: state.cartSummary,
    step: state.tablet.step,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
