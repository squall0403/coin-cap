var sqlite3 = require('sqlite3').verbose()
const { resolve } = require('bluebird');
var md5 = require('md5')

const db_source = "./db/database.sqlite3"

let db = new sqlite3.Database(db_source, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
    }
});


const get_all_courses = async (sql) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    })
}
module.exports = { get_all_courses }