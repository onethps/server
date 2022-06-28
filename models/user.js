const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model('User', UserShema);

exports.User = User;
