import React from 'react';

export default class Position extends React.Component {

  static propTypes = {
    index: React.PropTypes.number,
    value: React.PropTypes.number,
    onClick: React.PropTypes.func
  }

  _handleClick(e) {
    e.stopPropagation;
    this.props.onClick(this.props.value, this.props.index);
  }

  _getClassName() {
    if (this.props.value === 1) {
      return 'playerOne';
    } else if (this.props.value === 2) {
      return 'playerTwo';
    } else {
      return '';
    }
  }

  render() {

    let {
      value
    } = this.props;

    return (
      <div className="position" onClick={this._handleClick.bind(this)}>
        <div className={this._getClassName()}></div>
      </div>
    );
  }
}
