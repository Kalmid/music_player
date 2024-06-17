const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
