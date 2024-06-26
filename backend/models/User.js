const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    passwordHash: String,
});

module.exports = mongoose.model('User', UserSchema);
