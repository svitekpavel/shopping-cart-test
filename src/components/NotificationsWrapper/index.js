import React from 'react';
import './styles.css';

class NotificationsWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="notifications-wrapper">
        {children}
      </div>
    );
  }
}

export default NotificationsWrapper;
