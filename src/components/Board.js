import React from 'react';
import Row from './Row';

export default class Board extends React.Component {

  static propTypes = {
    rows: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
    onClick: React.PropTypes.func
  }

  render() {

    let {
      rows,
      onClick
    } = this.props;

    let boardRows = rows.map((positions, i) => (
      <Row
        index={i}
        positions={positions}
        onClick={onClick}
      />
    ));

    return (
      <div className="board">
        <div className="row">
          {boardRows}
        </div>
      </div>
    );
  }
}
