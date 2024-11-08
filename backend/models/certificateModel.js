const mongoose = require('mongoose');

// Define the certificate schema
const certificateSchema = new mongoose.Schema({
    certificateId: { type: String, required: true, unique: true }, // Make sure this is unique
    studentName: { type: String, required: true },
    courseName: { type: String, required: true },
    issueDate: { type: Date, required: true },
    // Add other fields as necessary
});

// Create and export the certificate model
const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;
