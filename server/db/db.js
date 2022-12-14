const sqlite3 = require('sqlite3').verbose();
const init_db = () => {
    let db = new sqlite3.Database('./db/database.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.log(err.message)
        }
        // console.log('Connected to the database.');
    });
    return (db);
};

const get_course = () => {
    let db = init_db();
    let sql = `SELECT * FROM courses;`;
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                }
                close_db(db);
                resolve(rows);
            });
        })
    })
}

const get_single_course = (id) => {
    let db = init_db();
    let sql = `SELECT * FROM courses WHERE course_id=${id};`;
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                }
                close_db(db);
                resolve(rows);
            });
        })
    })
}

const insert_course = (courseObj) => {
    let db = init_db();
    let sql = `INSERT INTO courses 
    (course_name,course_url,course_category,course_level,course_image)
    VALUES
    (
        "${courseObj.course_name}",
        "${courseObj.course_url}",
        "${courseObj.course_category}",
        "${courseObj.course_level}",
        "${courseObj.course_image}"
    )`;

    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(sql, (err) => {
                if (err) {
                    reject(err);
                }
                close_db(db);
                resolve(courseObj);
            });
        })
    })
}

const delete_course = (id) => {
    let db = init_db();
    let sql = `DELETE from courses where course_id=${id};`
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(sql, (err) => {
                if (err) {
                    reject(err);
                }
                close_db(db);
                resolve(`Course with ID: ${id} has been deleted`);
            });
        })
    })
}

const close_db = (db) => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        // console.log('Close the database connection.');
    });
}

const create_course_db = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS courses (
            course_id INTEGER PRIMARY KEY,
            course_name TEXT NOT NULL,
            course_url TEXT NOT NULL,
            course_category TEXT NOT NULL,
            course_level TEXT NOT NULL,
            course_image TEXT,
        );`, (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    });

    close_db();
}

module.exports = { close_db, create_course_db, get_course,get_single_course, insert_course, delete_course };