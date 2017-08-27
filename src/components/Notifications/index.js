import React from 'react';
import './styles.css';

class Notifications extends React.Component {
  render() {
    const { notifications } = this.props;

    const last = notifications.slice(-1);
    const notificationNodes = last.map(n => <li>{n.text}</li>);

    return (
      <div className="notifications">
        <ul>
          {notificationNodes}
        </ul>
      </div>
    );
  }
}

export default Notifications;
