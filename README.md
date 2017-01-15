# Connect Four

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Clone locally using `git clone git@github.com:janephilipps/connect-four.git`
2. `cd` into `connect-four` directory
3. Install dependencies using `npm install`
4. Start webpack using `npm start`
5. Navigate to app in [browser](http://localhost:3000)
6. Play a game!
7. Refresh browser to start a new game

## Discussion

The technologies I used to build this app are: ReactJS and Webpack.

## Requirements

##### A traditional 7 x 6 board with 2 piece colors.
I used the look of [John Papandrea's Game Concept](https://dribbble.com/shots/2442935-Game-Concept) as inpspiration.

##### 2 players can take turns clicking in a single browser window.

Each player can take turns by clicking in the board, and the message at the bottom of the screen will update with the current player's turn.

##### The game correctly places pieces at the top of the stack when a player selects a column.

When a player clicks anywhere on any column on the board, a piece will appear at the top of the stack.

##### When there are 4 of the same color in a line horizontally, vertically, or diagonally, the winning player is detected.

Once a player has won, the message at the bottom will update to reflect the winner and the winning pieces will spin.

##### If the board is full and no one's won, it's a tie

In the event of a tie, the message at the bottom will update.

