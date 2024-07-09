const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    user: 'candidate',
    password: 'NoTeDeSt^C10.6?SxwY882}',
    database: 'conqtvms_dev'
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Root route handler
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// API routes
const vendorUsersRoutes = require('./routes/vendorUsers');
app.use('/api', vendorUsersRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
