import { default as React } from 'react';

const Song = ({ song, number }) => {
    return(
        <div className="card">
            <img className="card-img-top" src={song.image} alt="foto" />
            <div className="card-body">
                <h5 className="card-title">Nummer: {number}</h5>
                <h5 className="card-title">{song.Titel}</h5>
                <div className="" dangerouslySetInnerHTML={{
                __html: song.link
              }}></div>
            </div>
        </div>
    )
}

export default Song;