const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001; // or another available port

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to serve the rsvp.html file
app.get('/rsvp', (req, res) => {
    res.sendFile(path.join(__dirname, 'rsvp.html'));
});

// Handle the RSVP form submission
app.post('/submit-rsvp', (req, res) => {
    const rsvpData = req.body;

    // Append the new RSVP data to the existing file or create a new one if it doesn't exist
    fs.readFile('rsvp.json', (err, data) => {
        let rsvpArray = [];
        if (!err && data.length > 0) {
            rsvpArray = JSON.parse(data);
        }
        rsvpArray.push(rsvpData);

        fs.writeFile('rsvp.json', JSON.stringify(rsvpArray, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                return res.status(500).send('Error saving RSVP');
            }
            res.redirect('thank_you.html');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
