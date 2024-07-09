
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/getVendorUsers', (req, res) => {
    const { prId, custOrgId } = req.query;

    // Check if prId and custOrgId are provided
    if (!prId || !custOrgId) {
        return res.status(400).json({ error: 'prId and custOrgId are required parameters' });
    }

    const query = `
        SELECT DISTINCT vu.VendorOrganizationId AS supplierId, vu.UserName, vu.Name
        FROM PrLineItems pli
        JOIN VendorUsers vu ON FIND_IN_SET(vu.VendorOrganizationId, pli.suppliers)
        WHERE pli.purchaseRequestId = ? AND pli.custOrgId = ? AND vu.Role = 'Admin'
    `;

    db.query(query, [prId, custOrgId], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: `Database error occurred: ${error.message}` });
        }
        res.json(results);
    });
});

module.exports = router;
