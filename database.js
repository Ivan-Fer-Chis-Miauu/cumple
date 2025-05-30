const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./guests.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS guests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);
});

module.exports = db;
