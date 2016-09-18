import React from 'react';

const ControlPanel = React.createClass({
  clickHandler(action) {
    console.log('clickHandler: '+action);
    switch (action) {
      case 'play':
        // const gameTurn = this.props.gameTurn.bind(null, this.props.tiles);
        let play = setTimeout(this.props.gameTurn.bind(null, this.props.tiles, this.props.lives), 0);
        break;
      case 'pause':
        clearTimeout(play);
        break;
    }
  },
  clickPlay() {
      const gameTurn = this.props.gameTurn.bind(null, this.props.tiles);
      let play = setInterval(gameTurn, 1000);
    return play;
  },
  render() {
    return (
      <div className="control-panel">
        <button className="take-turn" onClick={this.clickHandler.bind(this, 'play')}>Play</button>
        <button className="take-turn" onClick={this.clickHandler.bind(this, 'pause')}>Pause</button>
        <button>{this.props.lives.turns}</button>
      </div>
    )
  }
})

export default ControlPanel;
