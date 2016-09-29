import React from 'react';

const ControlPanel = React.createClass({
  pressPlay() {
    console.log('Fn: Press play');
    this.props.play()
    this.props.gameTurn(this.props.tiles, this.props.lives);
    this.ctrlFn();
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
        <button className="take-turn" onClick={this.pressPlay.bind(null)}>Play</button>
        <button className="take-turn" onClick={this.props.pause.bind(null)}>Pause</button>
        <button className="take-turn" onClick={this.props.faster.bind(null)}>Faster</button>
        <button className="take-turn" onClick={this.props.slower.bind(null)}>Slower</button>
        <button className="take-turn" onClick={this.props.generateTileArray.bind(null, this.props.lives)}>Randomise</button>
        <button>{this.props.lives.turns}</button>
      </div>
    )
  }
})

export default ControlPanel;
