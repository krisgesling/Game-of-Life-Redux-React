function control(state = [], action) {
  switch(action.type) {
    case 'PLAY':
      return ['play']
    case 'PAUSE':
      return ['pause']
    default:
      return state;
  }
}

export default control;
