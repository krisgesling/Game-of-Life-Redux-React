// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId,i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}

//**** GoL actions ****//
// Game turn
export function gameTurn(tiles, lives) {
  return {
    type: 'GAME_TURN',
    tiles,
    lives
  }
}
// Tile born

// Tile lives

// Tile dies
