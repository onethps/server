let {
    getUsers,
    addUser
} = require('./repository')

const express = require('express');


// middleware that is specific to this router

exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        let newUser = await addUser('Leha')
        console.log(newUser)
        res.write(JSON.stringify(newUser))
    }
    let users = await getUsers()
    res.write(JSON.stringify(users))
    res.end()
}




