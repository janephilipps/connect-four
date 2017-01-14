import React from 'react';
import Board from './components/Board';

export default class App extends React.Component {

  state = {
    currentPlayer: 1,
    winner: '',
    board: [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]]
  }

  _handleClick(value, positionIndex) {
    // check what column was clicked
    let column = positionIndex;
    let currentPlayer = this.state.currentPlayer;

    // find the first empty space in the column
    for (let i = this.state.board.length - 1; i >= 0; i--) {
      let currentPosition = this.state.board[i][column];
      // change the 0 to current player
      if (currentPosition === 0) {
        this.state.board[i][column] = currentPlayer;
        this.state.currentPlayer = currentPlayer === 1 ? 2 : 1;
        this.forceUpdate();
        return;
      } else if (currentPosition === 1 || currentPosition === 2) {
        continue;
      }
    }
  }

  render() {
    return (
      <div className="App">
        Connect Four!
        <Board
          rows={this.state.board}
          onClick={this._handleClick.bind(this)}
        />
        <span>Player {this.state.currentPlayer}'s Turn</span>
      </div>
    );
  }
}
