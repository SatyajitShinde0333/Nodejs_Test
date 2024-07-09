const express = require('express');
const app = express();
const port = 3000;

// Routes
const vendorUsersRoutes = require('./routes/vendorUsers');

// Use routes
app.use('/api', vendorUsersRoutes);

// Root route handler
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
