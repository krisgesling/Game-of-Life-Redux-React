// Generate random tiles in array
export function generateTileArray(lives) {
  return {
    type: 'GENERATE_TILE_ARRAY',
    lives
  };
}

// Primary game turn
export function gameTurn(tiles, lives) {
  return {
    type: 'GAME_TURN',
    tiles,
    lives
  };
}

// Change number of columns or rows in text input
export function updateGrid(inputName, text) {
  return {
    type: 'UPDATE_GRID',
    inputName,
    text
  };
}

// Generate new grid based on modified cols and rows
export function generateGrid() {
  return {
    type: 'GENERATE_GRID'
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

