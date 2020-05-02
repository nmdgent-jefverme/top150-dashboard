import React from 'react';
import './App.css';

import { SongList } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <div className="container" id="dragDropBlock" draggable="true">
      {/* <div className="countdown">
      <iframe src="http://free.timeanddate.com/countdown/i79bij70/n1246/cf112/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pcf00/tcfc0/fs300/szw576/szh243/tatDeel%205%20top%20150/tac000/tptTime%20since%20Event%20started%20in/tpc000/matstart%20binnen%3A/mac000/mpc000/iso2020-04-26T20:30:00" allowTransparency="true" frameborder="0" width="576" height="243"></iframe>


      </div> */}

      <SongList />
    </div>
  );
}

export default App;
