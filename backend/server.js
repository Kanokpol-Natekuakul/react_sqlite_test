const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('connected to the database');
});

// สร้างตารางหากยังไม่มี
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT)");
});

app.get('/users', (req, res) => {
    db.all("SELECT * FROM users", [], (error, rows) => {  // ใช้ 'error' ที่รับค่าจาก db.all()
        if (error) {
            res.status(500).json({ error: error.message });  // เปลี่ยน 'err' เป็น 'error'
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

app.post('/users', (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO users(name) VALUES(?)', [name], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            message: "success",
            data: { id: this.lastID, name: name }
        });
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
