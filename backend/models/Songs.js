const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: String,
    artist: String,
    album: String,
    genre: String,
    url: String,
});

module.exports = mongoose.model('Song', SongSchema);
