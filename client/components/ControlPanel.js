import React from 'react';

const ControlPanel = React.createClass({
  clickHandler(action) {
    console.log('clickHandler: '+action);
    switch (action) {
      case 'play':
        // const gameTurn = this.props.gameTurn.bind(null, this.props.tiles);
        let play = setTimeout(this.props.gameTurn.bind(null, this.props.tiles, this.props.lives), 0);
        break;
      case 'pause':
        clearTimeout(play);
        break;
    }
  },
  clickPlay(action) {
    var ctrlFn = function() {
      // console showing props undefined, play variable referring to wrong this.
      // need to pass this of parent through or bind the Fn to the right call location.
      console.log('ctrlFn');
      if (action == 'play') {
        console.log('action: play');

        let play = setInterval(() => {
          this.props.gameTurn(this.props.tiles, this.props.lives)
        }, 1000);
      } else if ( action == 'pause' ) {
        console.log('action: pause');
        clearInterval(play);
      }
    }
    var self = ctrlFn.call(this);
    return self;
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
