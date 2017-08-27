import React from 'react';
import './styles.css';

class TabletFooter extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="tablet-footer">
        {children}
      </div>
    );
  }
}

export default TabletFooter;
