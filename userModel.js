const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
})

const User = mongoose.model('User', userSchema);
module.exports = User;