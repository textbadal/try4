// addCertificate.js


const Certificate = require('./models/certificateModel'); // Make sure this path is correct


// Sample certificates to insert
const certificates = [
  
    {
        certificateId: "CERT07",
        studentName: "Badal Kumar",
        courseName: "Data Science",
        issueDate: new Date('2024-11-03')
    },
    {
        certificateId: "CERT050",
       studentName: "Sushant",
       courseName: "Machine Learning",
       issueDate: new Date('2024-11-04')
    },
  
];

// Function to add certificates to the database
exports.addCertificates = async (req, res) => {
    try {
        console.log('kuch v')
        // Insert certificates into the database
        await Certificate.insertMany(certificates);
        console.log('Certificates added successfully!');
    } catch (error) {
        console.log('Error adding certificates:', error);
        res.status(500).json({ valid: false, message: 'An error occurred' });
    }
};
