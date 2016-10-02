function lives(state = [], action) {

  // Clone state for return, never mutate state directly
  let returnState = Object.assign({}, state);

  switch(action.type) {
    case 'GENERATE_TILE_ARRAY':
      returnState.turns = 0;
      console.log('gen tile array');
      return returnState;

    case 'GAME_TURN':
      returnState.turns++;
      return returnState;

    case 'UPDATE_GRID':
      returnState['new'+action.inputName] = action.text;
      return returnState;

    case 'GENERATE_GRID':
      console.log('generate grid');
      if (state.newcols) {
        returnState.cols = state.newcols;
        delete returnState.newcols;
      }
      if (state.newrows) {
        returnState.rows = state.newrows;
        delete returnState.newrows;
      }

      return returnState;

    case 'TOGGLE_PADDING':
      returnState.padding = state.padding ? false : true;
      return returnState;

    default:
      return state;
  }
}

export default lives;
