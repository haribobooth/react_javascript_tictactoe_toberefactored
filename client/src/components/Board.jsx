import React from 'react';
import Tile from './Tile.jsx'

const Board = (props) => {
  const boardNodes = props.board.map((row, index) => {
    return (
      <div className='row'>
        <Tile onClick={props.handleTileClick} symbol={props.board[0][props.board.indexOf(row)]} coords={{x: 0, y: props.board.indexOf(row)}}/>
        <Tile onClick={props.handleTileClick} symbol={props.board[1][props.board.indexOf(row)]} coords={{x: 1, y: props.board.indexOf(row)}}/>
        <Tile onClick={props.handleTileClick} symbol={props.board[2][props.board.indexOf(row)]} coords={{x: 2, y: props.board.indexOf(row)}}/>
      </div>
    )
  })

  if(props.winner !== null){
    return (
      <div id='winner-announcer'>{props.winner} wins!</div>
    )
  }

  return (
    <div id="wrapper">
      {boardNodes}
    </div>
  )
};

export default Board;
