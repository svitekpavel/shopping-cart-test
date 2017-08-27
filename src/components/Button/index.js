import React from 'react';
import cn from 'classnames';
import './styles.css';

class Button extends React.Component {
  render() {
    const {
      children,
      className,
      primary,
      tiny,
      onClick,
    } = this.props;

    const classes = cn(
    'button',
    {
      'button-tiny': tiny === true,
      'button-primary': primary === true,
    },
    className);

    return (
      <button
        onClick={onClick}
        className={classes}
      >
        {children}
      </button>
    );
  }
}

export default Button;
