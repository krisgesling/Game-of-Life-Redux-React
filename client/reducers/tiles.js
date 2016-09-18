function gameTurn(state = [], action) {
  switch(action.type) {
    case 'GAME_TURN':
      var findNeighbours = function() {
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
        return(nextTurnTiles);
      }
      var checkLife = function(alive, neighbourCount) {
      // Takes binary of whether a tile is alive, and number of neighbours
      // returns whether that tile will be alive at the end of the turn.
        if (typeof(alive) == 'undefined' || typeof(neighbourCount) == 'undefined' ) {
          throw new SyntaxError('One or more required parameters were undefined');
        } else if ( !(alive >= 0 && alive <= 1) ) {
          throw new TypeError('Invalid life binary: '+alive);
        } else if (typeof(neighbourCount) !== 'number') {
          throw new TypeError('Invalid neighbourCount: '+neighbourCount);
        }
        var nowAlive = null;
        if (!alive) {
          nowAlive = neighbourCount == 3 ? 1 : 0;
        } else {
          switch (neighbourCount) {
            case 2:
            case 3:
              nowAlive = 1;
              break;
            default:
              nowAlive = 0;
          }
        }
        return nowAlive;
      };

      return (findNeighbours())

    default:
      return state;
  }
}

export default gameTurn;
