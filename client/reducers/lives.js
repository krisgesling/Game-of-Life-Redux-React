// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function lives(state = [], action) {
  switch(action.type) {
    case 'TILE_BORN':
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1),
      ]
    case 'GAME_TURN':
      let retState = action.lives;
      retState.turns++;
      return (retState);
    default:
      return state;
  }
}

export default lives;
