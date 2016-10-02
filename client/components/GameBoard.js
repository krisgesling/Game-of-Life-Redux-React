import React from 'react';
import TileBoard from './TileBoard';
import ControlPanel from './ControlPanel';
import DisplayControl from './DisplayControl';

const GameBoard = React.createClass({
  render() {
    return (
      <div className="game-board">
        <ControlPanel {...this.props} />
        <TileBoard {...this.props} />
        <DisplayControl {...this.props} />
      </div>
    )
  }
})

export default GameBoard;
