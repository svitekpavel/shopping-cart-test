import React from 'react';
import IconSpinner from '../../assets/spinner.gif';
import './styles.css';

class TabletLoadingScreen extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="tablet-loading-screen">
        <img src={IconSpinner} width={75} height={75} />
      </div>
    );
  }
}

export default TabletLoadingScreen;
