import React from 'react';
import Position from './Position';

export default class Row extends React.Component {

  static propTypes = {
    index: React.PropTypes.number,
    positions: React.PropTypes.arrayOf(React.PropTypes.number),
    winPositions: React.PropTypes.arrayOf(React.PropTypes.shape({
      row: React.PropTypes.number,
      column: React.PropTypes.number
    })),
    onClick: React.PropTypes.func
  }

  render() {

    let {
      index,
      positions,
      winPositions,
      onClick
    } = this.props;

    let row = positions.map((value, i) => (
      <Position
        key={index-i}
        rowIndex={index}
        colIndex={i}
        value={value}
        winPositions={winPositions}
        onClick={onClick}
      />
    ));

    return (
      <div className="row">
        {row}
      </div>
    );
  }
}
