const mongoose = require('mongoose');
const feedSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
})

const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;