import { default as React } from 'react';

const Song = ({ song, number }) => {
    const style = {
        width: "30rem",
    }
    return(
        <div className="card" style={style}>
            <img className="card-img-top" src={song.image} alt="foto" />
            <div className="card-body">
                <h5 className="card-title">Nummer: {number}</h5>
                <h5 className="card-title">Titel: {song.title}</h5>
                <p className="card-text">Artiest: {song.artist}</p>
                <div className="" dangerouslySetInnerHTML={{
                __html: song.link
              }}></div>
            </div>
        </div>
    )
}

export default Song;