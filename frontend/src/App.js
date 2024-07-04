
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';


function App() {

  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Music Player</h1>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={() => <Search setCurrentSong={setCurrentSong} />} />
          <Route path="/playlists" component={Playlist} />
        </Switch>
        {currentSong && <MusicPlayer song={currentSong} />}
      </div>
    </Router>
  );
};

export default App;
