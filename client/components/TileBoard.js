import React from 'react';
import Tile from './Tile';

let tileSize;

const TileBoard = React.createClass({
  renderRow(row, i) {
    return (
      <div className="row" key={i} style={{height:tileSize}}>
      { row.map((tile,j) =>
              this.renderTile(tile,i,j)
      ) }
      </div>
    )
  },
  renderTile(tile,i,j) {
    //console.log(tile + ' | ' + i + ' | ' + j);

    const uniqueKey = i + '' + j;
    const deadOrAlive = this.props.tiles[i][j] ? 'alive' : 'dead';
    const tilePadding = this.props.lives.padding ? '1px' : '0px';
    const tileStyle = {width: tileSize, height: tileSize, padding: tilePadding};
    return (
      <Tile life={deadOrAlive} key={uniqueKey} y={i} x={j} style={tileStyle} tile={tile} />
    )
  },
  render() {
    tileSize = Math.floor(window.innerWidth * 0.8 / this.props.lives.cols);
    tileSize += 'px';
    console.log(tileSize);
    return (
      <div className="tile-board">
        { this.props.tiles.map((row,i) =>
          this.renderRow(row, i)
        )}
      </div>
    )
  }
})

export default TileBoard;
