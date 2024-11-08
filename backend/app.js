const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const certificateRoutes = require('./routes/certificateRoutes');  // Import certificate routes
const path = require('path');
const { addCertificates } = require('./addCertificate');
require('dotenv').config();  // Load environment variables

const app = express();

// CORS middleware configuration
const corsOptions = {
  origin: 'http://127.0.0.1:5501', // Allow frontend from this URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

};
app.use(cors(corsOptions));

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(morgan("common"));

// Use JSON middleware
app.use(express.json());

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Use certificate routes
app.use('/api/certificates', certificateRoutes);
app.use('/api/addCertificate', addCertificates);
// Serve index.html for unmatched routes
app.get('*', (req, res) => {
    if (!req.url.startsWith('/api/')) {
        res.sendFile(path.join(__dirname, '../frontend', 'certificate-verification.html'));
    }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
