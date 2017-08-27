import React from 'react';
import Button from '../Button';
import './styles.css';

class AddButton extends React.Component {
  render() {
    const {
      onClick,
    } = this.props;

    return (
      <Button
        tiny
        className="add-button"
        onClick={onClick}
      >+</Button>
    );
  }
}

export default AddButton;
