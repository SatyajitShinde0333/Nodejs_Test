const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'db-technical-test.conqt.com',
    user: 'candidate',
    password: 'NoTeDeSt^C10.6?SxwY882}',
    database: 'nodejs_test'
});


db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
