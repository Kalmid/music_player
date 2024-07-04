import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setCurrentSong }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`/api/songs/search?q=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((song) => (
                    <li key={song._id} onClick={() => setCurrentSong(song)}>
                        {song.title} by {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
