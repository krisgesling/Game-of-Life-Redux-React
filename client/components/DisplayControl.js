import React from 'react';

const DisplayControl = React.createClass({

  inputUpdate(e) {
    this.props.updateGrid(e.target.name, e.target.value);
  },

  generateGrid() {
    let innerFn = function(cb) {
      this.props.generateGrid();
      setTimeout(() => this.props.generateTileArray(this.props.lives), 50);
    }
    return innerFn.call(this)
  },

  render() {
    return (

      <div className="display-control">
        <div className="control-row">
          <div className="button">
            {this.props.control.turnInterval / 1000} second delay
          </div>
          <button onClick={this.props.faster.bind(null)}>
            Faster
          </button>
          <button onClick={this.props.slower.bind(null)}>
            Slower
          </button>
          <button onClick={this.props.togglePadding.bind(null)}>
            Padding: {this.props.lives.padding ? 'On' : 'Off'}
          </button>
        </div>
        <div>
          <div className="button">
            Columns:
            <input
              name="cols"
              type="text"
              defaultValue={this.props.lives.cols}
              onChange={this.inputUpdate}
            />
          </div>
          <div className="button">
            Rows:
            <input
              name="rows"
              type="text"
              defaultValue={this.props.lives.rows}
              onChange={this.inputUpdate}
            />
          </div>
          <button onClick={this.generateGrid}>
            Generate
          </button>
        </div>
      </div>
    )
  }
})

export default DisplayControl;
