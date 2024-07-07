
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';


const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songs, setSongs] = useState([
    { url: 'path/to/song1.mp3', title: 'Song 1', artist: 'Artist 1' },
    { url: 'path/to/song2.mp3', title: 'Song 2', artist: 'Artist 2' },
    
  ]);

  const setCurrentSong = (index) => {
    setCurrentSongIndex(index);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Music Player</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search setCurrentSong={setCurrentSong} />} />
          <Route path="/playlists" element={<Playlist />} />
        </Routes>
        {songs.length > 0 && (
          <MusicPlayer
            song={songs[currentSongIndex]}
            onSkip={nextSong}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
