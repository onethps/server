const {
    readJsonFromFile,
    WriteJsonFromFile
} = require('./fs-utils')

const {
    User
} = require('./models/user')


const getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({
            name: search
        })
    }

    // return readJsonFromFile("db")
}

const getUser = (id) => {
    return User.find({
        _id: id
    })
}


const addUser = async (name) => {
    let user = new User({
        name
    })
    return user.save()
}

const deleteUser = (_id) => {
    return User.deleteOne({
        _id
    })
}

exports.getUsers = getUsers
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.getUser = getUser