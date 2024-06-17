import React, { useState, useRef } from 'react';

const MusicPlayer = ({ song }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const playPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skip = () => {
        // Logic to skip to next song
    };

    const changeVolume = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };

    return (
        <div>
            <audio ref={audioRef} src={song.url} />
            <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={skip}>Skip</button>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} />
        </div>
    );
};

export default MusicPlayer;
