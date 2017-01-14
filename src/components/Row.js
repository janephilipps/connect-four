import React from 'react';
import Position from './Position';

export default class Row extends React.Component {

  static propTypes = {
    positions: React.PropTypes.arrayOf(React.PropTypes.number),
    onClick: React.PropTypes.func
  }

  render() {

    let {
      positions,
      onClick
    } = this.props;

    let row = positions.map((value, i) => (
      <Position
        index={i}
        value={value}
        onClick={onClick}
      />
    ));

    return (
      <div>
        {row}
      </div>
    );
  }
}
