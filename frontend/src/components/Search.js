import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        const response = await axios.get(`/api/songs/search?q=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
