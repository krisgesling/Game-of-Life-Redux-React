export function generateGrid() {
  return {
    type: 'GENERATE_GRID'
  };
}

// Generate random tile array
export function generateTileArray(lives) {
  return {
    type: 'GENERATE_TILE_ARRAY',
    lives
  };
}

// Game turn
export function gameTurn(tiles, lives) {
  return {
    type: 'GAME_TURN',
    tiles,
    lives
  };
}

// Change number of columns
export function updateGrid(inputName, text) {
  return {
    type: 'UPDATE_GRID',
    inputName,
    text
  };
}

// Toggle tile padding on display
export function togglePadding() {
  return {
    type: 'TOGGLE_PADDING'
  };
}

// Btn handling for game control
export function play() {
  return {
    type: 'PLAY'
  };
}

export function pause() {
  return {
    type: 'PAUSE'
  };
}

export function faster() {
  return {
    type: 'FASTER'
  };
}

export function slower() {
  return {
    type: 'SLOWER'
  };
}

