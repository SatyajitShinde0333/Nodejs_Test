const db = require('../config/db');

const getVendorUsers = (req, res) => {
    const { prId, custOrgId } = req.query;

    if (!prId || !custOrgId) {
        return res.status(400).json({ error: 'prId and custOrgId are required' });
    }

    const query = `
        SELECT vu.VendorOrganizationId AS supplierId, vu.UserName, vu.Name
        FROM PrLineItems pli
        JOIN VendorUsers vu ON FIND_IN_SET(vu.VendorOrganizationId, pli.suppliers)
        WHERE pli.purchaseRequestId = ? AND pli.custOrgId = ? AND vu.Role = 'Admin'
        GROUP BY vu.VendorOrganizationId, vu.UserName, vu.Name
    `;

    db.query(query, [prId, custOrgId], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'Database error occurred' });
        }
        res.json(results);
    });
};

module.exports = {
    getVendorUsers
};
