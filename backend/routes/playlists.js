const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');


router.get('/', async (req, res) => {
    try {
        const userId = req.query.userId; // Assuming user ID is passed as a query parameter
        const playlists = await Playlist.find({ user: userId });
        res.json(playlists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new playlist
router.post('/', async (req, res) => {
    const playlist = new Playlist({
        name: req.body.name,
        songs: req.body.songs // Assuming songs is an array of song IDs
    });

    try {
        const newPlaylist = await playlist.save();
        res.status(201).json(newPlaylist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a playlist
router.put('/:id', async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        if (req.body.name != null) {
            playlist.name = req.body.name;
        }
        if (req.body.songs != null) {
            playlist.songs = req.body.songs; // Assuming songs is an array of song IDs
        }

        const updatedPlaylist = await playlist.save();
        res.json(updatedPlaylist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Delete a playlist
router.delete('/:id', async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        await playlist.remove();
        res.json({ message: 'Playlist deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
