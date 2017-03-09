import React from 'react';
import {render} from 'react-dom';
import GameContainer from './containers/GameContainer.jsx';

window.onload = () => {
  render(
      <GameContainer />,
      document.getElementById('app')
    );
  }
