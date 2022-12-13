const sqlite3 = require('sqlite3').verbose();

const get_course = () => {
    let db = init_db()
    let sql = `SELECT * FROM courses;`;
    db.serialize(() => {
        db.all(sql, (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(rows);
            return rows;
        });
    })
}
const init_db = () => {
    let db = new sqlite3.Database('./db/database.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.log(err.message)
        }
        console.log('Connected to the database.');
    });
    return (db);
};

const close_db = () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
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

module.exports = { close_db, create_course_db, get_course };