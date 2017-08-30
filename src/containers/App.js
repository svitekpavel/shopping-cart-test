import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarInterior from '../components/CarInterior';
import ShopHeader from '../components/ShopHeader';
import ShopThankYouScreen from '../components/ShopThankYouScreen';
import NotificationsWrapper from '../components/NotificationsWrapper';
import Notifications from '../components/Notifications';
import ProductTable from '../components/ProductTable';
import RecordingButton from '../components/RecordingButton';
import TabletLoadingScreen from '../components/TabletLoadingScreen';
import TabletWrapper from '../components/TabletWrapper';
import TabletFooter from '../components/TabletFooter';
import Button from '../components/Button';
import CartSummary from '../components/CartSummary';
import * as recorder from '../lib/media-recorder';
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
    const {
      cart,
      dispatch,
    } = this.props;

    const count = utils.getProductCountFromCart(cart, item);

    if (count > 0) {
      dispatch(cartActions.removeItem(item));
      dispatch(notificationsActions.addNotification(`${item} removed.`));
    } else {
      dispatch(notificationsActions.addNotification(`There's no ${item} to remove.`));
    }
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

  handleToggleRecording = () => {
    const {
      dispatch,
      isRecording,
    } = this.props;

    if (isRecording) {
      dispatch(tabletActions.stopRecording());
    } else {
      dispatch(tabletActions.startRecording());

      const recordingInterval = 2500;
      setTimeout(() => dispatch(tabletActions.stopRecording()), recordingInterval);

      recorder.start(recordingInterval)
        .then((blob) => {
          console.log('SUCESS!!!');
          console.log(blob);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    setTimeout(() => dispatch(notificationsActions.addNotification(`Welcome to Amazon Store for Tesla..`, 2500)), 1500);
    setTimeout(() => dispatch(notificationsActions.addNotification(`This is your heads-up display that will show store notifications..`, 3500)), 5000);
    setTimeout(() => dispatch(notificationsActions.addNotification(`Start adding goods to your basket..`, 2500)), 10000);

    setTimeout(() => dispatch(tabletActions.switchStep('shop')), 5000);
    // setTimeout(() => dispatch(tabletActions.switchStep('shop')), 500);
  }

  renderTabletContent() {
    const {
      cart,
      step,
      isRecording,
    } = this.props;

    if (step === 'loading') {
      return (
        <TabletLoadingScreen />
      );
    } else if (step === 'order-successful') {
      return (
        <div>
          <ShopHeader />
          <ShopThankYouScreen />
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
          <RecordingButton
            isRecording={isRecording}
            onClick={this.handleToggleRecording}
          />
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
    isRecording: state.tablet.recording,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
