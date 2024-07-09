const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    user: 'candidate',
    password: 'NoTeDeSt^C10.6?SxwY882}',
    database: 'User'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
