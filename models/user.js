const mongoose = require('mongoose')


const UserShema = new mongoose.Schema({
    name:String,

})

const User = mongoose.model('User', UserShema)

const user1 = new User({name: 'Jenya'})

exports.User = User