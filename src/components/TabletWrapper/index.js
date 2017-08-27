import React from 'react';
import './styles.css';

class TabletWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="tablet-wrapper">
        {children}
      </div>
    );
  }
}

export default TabletWrapper;
