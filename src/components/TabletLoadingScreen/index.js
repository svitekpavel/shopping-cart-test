import React from 'react';
import IconSpinner from '../../assets/spinner.gif';
import './styles.css';

class TabletLoadingScreen extends React.Component {
  render() {
    return (
      <div className="tablet-loading-screen">
        <img src={IconSpinner} width={75} height={75} alt="spinner"/>
      </div>
    );
  }
}

export default TabletLoadingScreen;
