const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-rsvp', (req, res) => {
    const rsvpData = req.body;

    // Load existing RSVPs
    let rsvps = [];
    const rsvpFilePath = path.join(__dirname, 'rsvp.json');
    if (fs.existsSync(rsvpFilePath)) {
        const fileContent = fs.readFileSync(rsvpFilePath);
        rsvps = JSON.parse(fileContent);
    }

    // Add new RSVP data
    rsvps.push(rsvpData);

    // Save updated RSVPs back to rsvp.json
    fs.writeFileSync(rsvpFilePath, JSON.stringify(rsvps, null, 2));

    // Redirect to thank you page
    res.redirect('/thank_you.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
