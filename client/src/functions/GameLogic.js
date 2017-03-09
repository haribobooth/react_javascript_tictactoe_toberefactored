class GameLogic {
  constructor() {
    this.board = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]
  }

  changeTile(coords, symbol) {
    if(typeof(this.board[coords.x][coords.y]) == 'number'){
      this.board[coords.x][coords.y] = symbol;
      return true;
    }
    return false;
  }

  checkWin() {
    let win = false;
    let winner = null;

    this.board.forEach((row) => {
      if(row[0] == row[1] && row[1] == row[2]){
        win = true;
        winner = row[0];
      }
    })

    for(let i = 0; i < 3; i++){
      const column = [];
      this.board.forEach((row) => {
        column.push(row[i]);
      })

      if(column[0] == column[1] && column[1] == column[2]){
        win = true;
        winner = column[0];
      }
    }

    const board = this.board;
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){
      win = true;
      winner = board[0][0];
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0]){
      win = true;
      winner = board[0][2];
    }

    return {win: win, winner: winner};
  }
}

export default GameLogic;
