import React from 'react';
import GreenIcon from '../../assets/record-green.png';
import RedIcon from '../../assets/record-red.png';
import './styles.css';

class RecordingButton extends React.Component {
  render() {
    const {
      isRecording,
      onClick,
    } = this.props;

    const image = isRecording ? GreenIcon : RedIcon;
    const label = isRecording ? 'Speak now..' : 'Tap to record';

    return (
      <div className="mic-wrapper">
        <div className="mic">
          <div className="img-wrapper">
            <img src={image} onClick={onClick} alt="Record" />
          </div>
          {label}
        </div>
      </div>
    );
  }
}

export default RecordingButton;
