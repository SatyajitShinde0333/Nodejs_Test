const express = require('express');
const router = express.Router();
const { getVendorUsers } = require('../controllers/vendorUsersController');

router.get('/getVendorUsers', getVendorUsers);

module.exports = router;
