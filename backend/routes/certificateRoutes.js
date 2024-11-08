const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');  // Import controller
const { addCertificates } = require('../addCertificate');

// Define the route to verify certificate by ID
router.get('/verify/:certificateId', certificateController.verifyCertificate);
router.get('/verify/addcertificates',addCertificates);

module.exports = router;
