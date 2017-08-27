import React from 'react';
import './styles.css';

class CarInterior extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="car-interior">
        {children}
      </div>
    );
  }
}

export default CarInterior;
