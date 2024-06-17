import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Playlist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await axios.get('/api/playlists');
            setPlaylists(response.data);
        };
        fetchPlaylists();
    }, []);

    const createPlaylist = async () => {
        const response = await axios.post('/api/playlists', { name });
        setPlaylists([...playlists, response.data]);
    };

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={createPlaylist}>Create Playlist</button>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist._id}>{playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
