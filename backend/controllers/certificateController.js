const Certificate = require('../models/certificateModel'); // Import the Certificate model

// Function to verify the certificate by certificateId
const verifyCertificate = async (req, res) => {
  const certificateId = req.params.certificateId;  // Get the certificate ID from the URL

  try {
    // Find the certificate in the database using the model
    const certificate = await Certificate.findOne({ certificateId });

    if (!certificate) {
      // If certificate not found, return an error message
      return res.json({ valid: false, message: 'Certificate not found' });
    }

    // If certificate is found, return its details
    return res.json({
      valid: true,
      certificate: {
        certificateId: certificate.certificateId,
        studentName: certificate.studentName, // Ensure this field exists in MongoDB
        courseName: certificate.courseName,   // Ensure this field exists in MongoDB
        issueDate: certificate.issueDate,   // Ensure this field exists in MongoDB
      },
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ valid: false, message: 'An error occurred' });
  }
};

// Export the controller functions
module.exports = { verifyCertificate };
