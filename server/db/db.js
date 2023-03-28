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

// COURSE
const get_all = async (sql) => {
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

const get_single = async (sql, params) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.get(sql, params, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    })
}

const delete_single = async (sql, params) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(sql, params, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
    })
}

const get_content_by_course = async (sql, params) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    })
}

const post_bill = async (sql, params) => {
    /*  db.run(sql, params, function (err, result) {
         if (err) {
             res.status(400).json({ "error": err.message })
             return;
         }
         res.json({
             "message": "success",
             "data": data,
             "id": this.lastID
         })
     }); */
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    })
}
module.exports = { get_all, get_single, delete_single, get_content_by_course, post_bill }