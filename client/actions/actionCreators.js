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

// Btn handling for game control
export function play() {
  return {
    type: 'PLAY'
  }
}

export function pause() {
  return {
    type: 'PAUSE'
  }
}

export function faster() {
  return {
    type: 'FASTER'
  }
}

export function slower() {
  return {
    type: 'SLOWER'
  }
}

