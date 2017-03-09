import React from 'react';
import GameLogic from '../functions/GameLogic.js';
import Board from '../components/Board.jsx';

class GameContainer extends React.Component{
  constructor() {
    super();
    let game = new GameLogic();
    this.state = {playerTurn: "x", game: game, winner: null};
  }

  checkWin() {
    const result = this.state.game.checkWin();
    if(result.win == true){
      this.setState({winner: result.winner});
    }
  }

  handleTileClick(event){
    let coords = JSON.parse(event.target.dataset.coords);
    let successfulTurn = this.state.game.changeTile(coords, this.state.playerTurn);

    if(successfulTurn){
      let newPlayerTurn
      if(this.state.playerTurn == "x"){
        newPlayerTurn = "o";
      } else {
        newPlayerTurn = "x";
      }

      this.checkWin();
      this.setState({playerTurn: newPlayerTurn});
    }
  }

  render() {
    return (
      <div id="overall-wrapper">
        <Board handleTileClick={this.handleTileClick.bind(this)} board={this.state.game.board} winner={this.state.winner}/>
      </div>
    )
  }
}

export default GameContainer;
