import { default as React, useState } from 'react';
import Hammer from 'hammerjs';

import Song from '../song/song';
import { songs } from '../../config'

const SongList = () => {
    const [curSong, setCurSong] = useState(130);
    // console.log(songs);
    const dragBlock = document.getElementById('root');
    const hammertime = new Hammer(dragBlock);
    hammertime.on('swipe', (ev) => {
        if (ev.direction === 2) displayPrevious(ev);
        else if (ev.direction === 4) displayNext(ev);
    });

    const displayPrevious = (ev) => {
        ev.preventDefault();
        if (curSong < 150) setCurSong(curSong + 1);
    }

    const displayNext = (ev) => {
        ev.preventDefault();
        if(curSong >= 122) setCurSong(curSong - 1);
    }

    return(
        <div className="card__container">
            <button className="btn btn-primary" onClick={ ev => displayPrevious(ev) }>Vorige nummer</button>
            <Song song={songs[`nummer${curSong}`]} number={curSong}/>
            <button className="btn btn-primary" onClick={ ev => displayNext(ev) }>Volgend nummer</button>
        </div>
    )
}

export default SongList;