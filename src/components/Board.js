import React from 'react';
import Row from './Row';

export default class Board extends React.Component {

  static propTypes = {
    rows: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
    winPositions: React.PropTypes.arrayOf(React.PropTypes.shape({
      row: React.PropTypes.number,
      column: React.PropTypes.number
    })),
    onClick: React.PropTypes.func
  }

  render() {

    let {
      rows,
      winPositions,
      onClick
    } = this.props;

    let boardRows = rows.map((positions, i) => (
      <Row
        key={i}
        index={i}
        positions={positions}
        winPositions={winPositions}
        onClick={onClick}
      />
    ));

    return (
      <div className="board">
        {boardRows}
      </div>
    );
  }
}
