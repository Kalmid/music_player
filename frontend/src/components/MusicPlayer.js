import React, { useState, useRef } from 'react';

const MusicPlayer = ({ song, onSkip }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.ontimeupdate = () => setCurrentTime(audioRef.current.currentTime);
            audioRef.current.onloadedmetadata = () => setDuration(audioRef.current.duration);
        }
    }, [volume, song]);

    const playPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skip = () => {
        onSkip();
        setIsPlaying(false); 
    };

    const changeVolume = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };

    const changeTime = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={song.url} />
            <div className="controls">
                <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={skip}>Skip</button>
            </div>
            <div className="volume-control">
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={volume} 
                    onChange={changeVolume} 
                />
            </div>
            <div className="progress-bar">
                <input 
                    type="range" 
                    min="0" 
                    max={duration} 
                    step="0.01" 
                    value={currentTime} 
                    onChange={changeTime} 
                />
                <div className="time">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
