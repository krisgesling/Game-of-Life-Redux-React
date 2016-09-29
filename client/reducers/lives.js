// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function lives(state = [], action) {
  switch(action.type) {

    case 'GENERATE_TILE_ARRAY':
      state = action.lives;
      state.turns = 0;
      return state;

    case 'GAME_TURN':
      state = action.lives;
      state.turns++;
      return state;

    default:
      return state;
  }
}

export default lives;
