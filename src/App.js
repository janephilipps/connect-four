import React from 'react';
import Board from './components/Board';

export default class App extends React.Component {

  state = {
    gameMessage: "Player 1's turn",
    currentPlayer: 1,
    winner: false,
    winPositions: [],
    board: [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]]
  }

  _handleClick(value, positionIndex) {

    if (this.state.winner) {
      this.setState({gameMessage: `${this.state.gameMessage}!`})

    } else {
      let column = positionIndex;
      let currentPlayer = this.state.currentPlayer;

      for (let i = this.state.board.length - 1; i >= 0; i--) {
        let currentPosition = this.state.board[i][column];

        if (currentPosition === 0) {
          let board = this.state.board;
          board[i][column] = currentPlayer;
          this.setState({board: board});
          let winner = this._checkWinner(i, column);

          if (winner) {
            this.setState({winPositions: winner});
            this.setState({winner: true});
            this.setState({gameMessage: `Player ${currentPlayer} won!`});
          } else {
            let newCurrentPlayer = currentPlayer === 1 ? 2 : 1;
            this.setState({currentPlayer: newCurrentPlayer});
            this.setState({gameMessage: `Player ${newCurrentPlayer}'s turn`});
          }

          let tie = this._checkTie(board);

          if (tie) {
            this.setState({gameMessage: "It's a tie!"});
          }
          return;
        }
      }
    }
  }

  _checkTie(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  _checkWinner(row, column) {
    let winningRow = this._checkRow(row);
    let winningColumn = this._checkColumn(column);
    let leftDiagonalWinner = this._checkLeftDiagonal(row, column);
    let rightDiagonalWinner = this._checkRightDiagonal(row, column);

    let winner = winningRow || winningColumn || leftDiagonalWinner || rightDiagonalWinner;

    return winner;
  }

  _checkRow(row) {
    let count = 0;
    let winPositions = [];
    for (let i = 0; i < this.state.board[row].length; i++) {
      if (this.state.board[row][i] === this.state.currentPlayer) {
        count++;
        winPositions.push({row : row, column: i});

        if (count === 4) {
          return winPositions;
        }
      } else {
        count = 0;
        winPositions = [];
      }
    }
  }

  _checkColumn(column) {
    let count = 0;
    let winPositions = [];

    for (let i = 0; i < 6; i++) {
      if (this.state.board[i][column] === this.state.currentPlayer) {
        count++;
        winPositions.push({row : i, column: column});

        if (count === 4) {
          return winPositions;
        }
      } else {
        count = 0;
        winPositions = [];
      }
    }
  }

  _checkLeftDiagonal(row, column) {
    let count = 0;
    let winPositions = [];
    let startRow = row > column ? row - column : 0;
    let startCol = column > row ? column - row : 0;

    for (let i = 0; i < 6; i++) {
      let r = startRow + i;
      let c = startCol + i;
      if (r >= 6 || c >= 7) {
        break;
      }

      if (this.state.board[r][c] === this.state.currentPlayer) {
        count++;
        winPositions.push({row : r, column: c});

        if (count === 4) {
          return winPositions;
        }
      } else {
        count = 0;
        winPositions = [];
      }
    }
  }

  _checkRightDiagonal(row, column) {
    let count = 0;
    let winPositions = [];
    let startRow = row + column <= 5 ? row + column : 5;
    let startCol = row + column <= 5 ? 0 : (row + column) - startRow;

    for (let i = 0; i < 6; i++) {
      let r = startRow - i;
      let c = startCol + i;
      if (r < 0 || c >= 7) {
        break;
      }

      if (this.state.board[r][c] === this.state.currentPlayer) {
        count++;
        winPositions.push({row : r, column: c});

        if (count === 4) {
          return winPositions;
        }
      } else {
        count = 0;
        winPositions = [];
      }
    }
  }

  render() {
    return (
      <div className="App">
        Connect Four
        <Board
          rows={this.state.board}
          winPositions={this.state.winPositions}
          onClick={this._handleClick.bind(this)}
        />
        <span>{this.state.gameMessage}</span>
      </div>
    );
  }
}
