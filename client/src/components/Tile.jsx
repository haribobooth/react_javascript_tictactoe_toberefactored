import React from 'react';

const Tile = (props) => {
  let symbol = props.symbol
  if(typeof(symbol) === 'number'){
    symbol = " - "
    return(
      <div className="tile" id="white" data-coords={JSON.stringify(props.coords)} onClick={props.onClick}>
        {symbol}
      </div>
    )
  }

  return(
    <div className="tile" data-coords={JSON.stringify(props.coords)} onClick={props.onClick}>
      {symbol}
    </div>
  )
};

export default Tile;
