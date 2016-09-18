import React from 'react';

const Tile = React.createClass({
  render() {

    return (
      <div className={this.props.life} x={this.props.x} y={this.props.y} style={this.props.style}>
        <div className="game-tile-inner">
        </div>
      </div>
    )
  }
})

export default Tile;
