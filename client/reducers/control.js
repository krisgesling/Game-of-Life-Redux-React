function control(state = {}, action) {
  const changeRate = 100;
  let newInterval;
  switch(action.type) {
    case 'PLAY':
      return {
        playState: 'play',
        turnInterval: state.turnInterval
      };

    case 'PAUSE':
      return {
        playState: 'pause',
        turnInterval: state.turnInterval
      };

    case 'FASTER':
      newInterval = state.turnInterval > changeRate ? state.turnInterval - changeRate : state.turnInterval;
      return {
        playState: state.playState,
        turnInterval: newInterval
      };

    case 'SLOWER':
      newInterval = Number(state.turnInterval) + changeRate;
      return {
        playState: state.playState,
        turnInterval: newInterval
      };

    default:
      return state;
  }
}

export default control;
