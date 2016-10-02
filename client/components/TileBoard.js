import React from 'react';
import Tile from './Tile';

const TileBoard = React.createClass({
  tileSizer() {
    let width = Math.floor(window.innerWidth * 0.8 / this.props.lives.cols);
    let height = Math.floor(window.innerHeight * 0.6 / this.props.lives.rows);
    let size = width < height ? width : height;
    return size;
  },
  renderRow(row, i) {
    return (
      <div
        className="row"
        key={i}
        style={{
          height:this.tileSizer() + 'px',
          width: this.tileSizer() * this.props.lives.cols + 'px'
        }}
      >
        { row.map((tile,j) =>
          this.renderTile(tile,i,j)
        ) }
      </div>
    )
  },
  renderTile(tile,i,j) {
    return (
      <Tile
        life={this.props.tiles[i][j] ? 'alive' : 'dead'}
        key={i + '' + j}
        y={i}
        x={j}
        style={{
          width: this.tileSizer() + 'px',
          height: this.tileSizer() + 'px',
          padding: this.props.lives.padding ? '1px' : '0px'
        }}
        tile={tile}
      />
    )
  },
  render() {
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
