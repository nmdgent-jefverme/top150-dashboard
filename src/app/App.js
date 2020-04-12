import React from 'react';
import './App.css';

import { SongList } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div className="container" id="dragDropBlock" draggable="true">
      <div className="countdown">
        <h1>START TOP 150</h1>
        <iframe title="timer" src="http://free.timeanddate.com/countdown/i78ldg4f/n1246/cf104/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pc6d0000/tceac8d5/fs300/szw576/szh243/tatDEEL%203%20TOP%20150/tac000/tptTime%20since%20Event%20started%20in/tpc000/mac000/mpc000/iso2020-04-12T20:30:00" allowTransparency="true" frameborder="0" width="576" height="243"></iframe>

      </div>
      {/* <SongList /> */}
    </div>
  );
}

export default App;
