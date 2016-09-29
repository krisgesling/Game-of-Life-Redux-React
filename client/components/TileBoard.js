import React from 'react';
import Tile from './Tile';

const TileBoard = React.createClass({
  renderTile(tile,i,j) {
    //console.log(tile + ' | ' + i + ' | ' + j);
    const uniqueKey = i + '' + j;
    let deadOrAlive = this.props.tiles[i][j] ? 'alive' : 'dead';
    return (
      <Tile life={deadOrAlive} key={uniqueKey} y={i} x={j} style={{top: i*20 + 'px', left: j*20 + 'px'}} tile={tile} />
    )
  },
  render() {
    return (
      <div className="tile-board">
        { this.props.tiles.map((row,i) =>
          row.map((tile,j) =>
            this.renderTile(tile,i,j)
          )
        )}
      </div>
    )
  }
})

export default TileBoard;
