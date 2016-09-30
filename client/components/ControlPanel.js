import React from 'react';

const ControlPanel = React.createClass({
  pressPlay() {
    if (this.props.control.playState === 'pause') {
      // set playState
      this.props.play()
      // trigger at least single turn
      this.props.gameTurn(this.props.tiles, this.props.lives);
      // call recursive setTimeout function to continue turns
      this.ctrlFn();
    }
  },
  ctrlFn() {
    setTimeout(() => {
      if(this.props.control.playState === 'play') {
        this.props.gameTurn(this.props.tiles, this.props.lives);
        this.ctrlFn();
      }
    }, this.props.control.turnInterval);
  },
  render() {
    return (

      <div className="control-panel">
        <button onClick={this.pressPlay}>Play</button>
        <button onClick={this.props.pause.bind(null)}>Pause</button>
        <button onClick={this.props.faster.bind(null)}>Faster</button>
        <button onClick={this.props.slower.bind(null)}>Slower</button>
        <button onClick={this.props.generateTileArray.bind(null, this.props.lives)}>Randomise</button>
        <div className="button">Life cycles: {this.props.lives.turns}</div>
      </div>
    )
  }
})

export default ControlPanel;
