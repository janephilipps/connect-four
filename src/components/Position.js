import React from 'react';

export default class Position extends React.Component {

  static propTypes = {
    rowIndex: React.PropTypes.number,
    colIndex: React.PropTypes.number,
    value: React.PropTypes.number,
    winPositions: React.PropTypes.arrayOf(React.PropTypes.shape({
      row: React.PropTypes.number,
      column: React.PropTypes.number
    })),
    onClick: React.PropTypes.func
  }

  _handleClick(e) {
    e.stopPropagation();
    this.props.onClick(this.props.value, this.props.colIndex);
  }

  _getClassName() {
    if (this.props.value === 1) {
      return 'playerOne';
    } else if (this.props.value === 2) {
      return 'playerTwo';
    } else {
      return 'empty';
    }
  }

  _getWinPosition() {
    if (this.props.winPositions) {
      for (let i = 0; i < this.props.winPositions.length; i++) {
        if (this.props.winPositions[i].row === this.props.rowIndex && this.props.winPositions[i].column === this.props.colIndex) {
          return 'winner';
        }
      }
    } else {
      return '';
    }
  }

  render() {

    return (
      <div className="position" onClick={this._handleClick.bind(this)}>
        <div className="outer">
          <div className={this._getClassName() + ' ' + this._getWinPosition()}></div>
        </div>
      </div>
    );
  }
}
