const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    passWord:{type: String, required: true},
    Email:{type: String, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;