import { default as React, useState } from 'react';

import Song from '../song/song';
import { songs } from '../../config'

const SongList = () => {
    const [curSong, setCurSong] = useState(150);
    // console.log(songs);

    const displayPrevious = (ev) => {
        ev.preventDefault();
        if (curSong < 150) setCurSong(curSong + 1);
    }

    const displayNext = (ev) => {
        ev.preventDefault();
        setCurSong(curSong - 1);
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