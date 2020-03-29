import React from 'react';
import './App.css';
import { ImageSlider } from './components';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="image__container">
              <ImageSlider />
            </div>
          </div>
          <div className="col-sm">
            <iframe className="spotify__container" title="spotify playlist" src="https://open.spotify.com/embed/album/2FeyIYDDAQqcOJKOKhvHdr" height="auto" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
