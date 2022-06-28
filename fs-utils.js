const fs = require('fs');

exports.readJsonFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, bf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(bf.toString()))
            }
        })
    })
}

exports.WriteJsonFromFile = (filePath, data) => {
    return new Promise((res, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject(err)
            console.log("SUCCESSFULLY WRITTEN TO FILE")
        })
    })
}