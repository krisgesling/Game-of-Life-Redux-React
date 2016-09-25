import React from 'react';

const ControlPanel = React.createClass({
  clickPlay(action) {
    var play;
    // play not persistent over function calls. Closure not working.
    // React calls each function on load, so it's actually creating two separate closures.
    // would it be different if it was a single btn calling the function and passing a variable into it?
    // Return to state machine model!!! Have play/pause in state and check state after each turn.

    // try this first - https://github.com/reactjs/redux/issues/1194
    // or this - http://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas/
    var ctrlFn = function() {
      console.log('ctrlFn');
      switch (action) {
        case 'play':
          console.log('action: play');
          play = setInterval(() => {
            this.props.gameTurn(this.props.tiles, this.props.lives)
          }, 500);
          console.log(play);
          break;
        case 'pause':
          console.log('action: pause');
          console.log(play);
          clearInterval(play);
          break;
      }
    }
    return ctrlFn.call(this);
  },
  render() {
    return (

      <div className="control-panel">
        <button className="take-turn" onClick={this.clickPlay.bind(this, 'play')}>Play</button>
        <button className="take-turn" onClick={this.clickPlay.bind(this, 'pause')}>Pause</button>
        <button>{this.props.lives.turns}</button>
      </div>
    )
  }
})

export default ControlPanel;
