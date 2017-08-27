import React from 'react';
import Button from '../Button';
import './styles.css';

class RemoveButton extends React.Component {
  render() {
    const {
      onClick,
    } = this.props;

    return (
      <Button
        tiny
        className="remove-button"
        onClick={onClick}
      >-</Button>
    );
  }
}

export default RemoveButton;
