const express = require('express');
const app = express();
const port = 3000;

const vendorUsersRoutes = require('./routes/vendorUsers');

// Use routes
app.use('/api', vendorUsersRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
