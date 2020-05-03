import React from 'react';
import './App.css';

import { SongList } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div className="container" id="dragDropBlock" draggable="true">
      <div className="countdown">
      <iframe title="timer" src="http://free.timeanddate.com/countdown/i79o3va4/n1246/cf110/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pca0bfd5/tcfff/fs300/szw576/szh243/tatTOP%20150%20DEEL/tac000/tptTime%20since%20Event%20started%20in/tpc000/mat6/mac000/mpc000/iso2020-05-03T20:30:00" allowTransparency="true" frameborder="0" width="576" height="243"></iframe>



      </div>
      
      {/* <SongList /> */}
    </div>
  );
}

export default App;
