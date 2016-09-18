{this.props.posts.map((post,i) => <Tile {...this.props} key={i} i={i} post={post} />)}

// From GameBoard.js
  generateTiles(col,rows) {
    console.log(this);
    let tileReturn = [];
    for (let i=0; i++; i<=col) {
      tileReturn[i] = (function inner(j) {
        return function() {
          <Tile {...this.props} key={j} j={j} />
        }
      })(i);
    }
    return (
      <Tile {...this.props} key={0} i={0} />
    )
  },




// From findNeighbours()
var findNeighbours = function() {
        console.time('gameTurnOriginal');
      // Maps all tiles on board and counts number of alive neighbours
      // returns new lives Array by calling checkLife on each tile
      let nextTurnTiles = [];
        action.tiles.map(function (row,i) {
          nextTurnTiles.push([]);
          row.map( function (tile,j) {
            let neighbourCount = 0;
            for (let k=i-1; k<=i+1; k++) {
              if (action.tiles[k]) {
                for (let l=j-1; l<=j+1; l++) {
                  if (action.tiles[k][l] && !(k === i && l === j)) {
                    neighbourCount += action.tiles[k][l];
                  }
                }
              }
            }
            nextTurnTiles[i].push(checkLife(tile,neighbourCount));
          });
        });
        console.timeEnd('gameTurnOriginal');
        return(nextTurnTiles);
      }



// From TileBoard.js
import React from 'react';
import Tile from './Tile';

const TileBoard = React.createClass({
  // Generate tiles based on rows and cols then add to state
  // ?? Should this be a reducer ??
  generateTiles() {
    let cols = this.props.lives.cols;
    let rows = this.props.lives.cols;
    this.props.lives.tiles = [];

    for (let i=0; i<rows; i++) {
      this.props.lives.tiles.push([]);
      for (let j=0; j<cols; j++) {
        this.props.lives.tiles[i].push(j);
        this.props.lives.tiles[i][j] = Math.floor(Math.random() * (Math.floor(1) - Math.ceil(0) + 1)) + Math.ceil(0)
      }
    }
  },
  renderTile() {

  },
  render() {
    return (
      <div className="tile-board">
        { this.generateTiles() }
        { this.props.lives.tiles.map((row,i) =>
          row.map((tile,j) =>
            <Tile {...this.props} key={i+''+j} y={i} x={j} style={{top: i*20 + 'px', left: j*20 + 'px'}} tile={tile} />
          )
        )}
      </div>
    )
  }
})

export default TileBoard;
