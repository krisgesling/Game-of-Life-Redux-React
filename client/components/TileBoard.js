import React from 'react';
import Tile from './Tile';

const TileBoard = React.createClass({
  // Generate tiles based on rows and cols then add to state
  // ?? Should this be a reducer ??
  generateTiles() {
    if (this.props.tiles.length <= 0) {
      for (let i=0; i<this.props.lives.rows; i++) {
        this.props.tiles.push([]);
        for (let j=0; j<this.props.lives.cols; j++) {
          this.props.tiles[i].push(j);
          this.props.tiles[i][j] = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0)
        }
      }
    }
  },
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
        { this.generateTiles() }
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
