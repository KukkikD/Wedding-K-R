const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/submit-rsvp', (req, res) => {
    const formData = req.body;

    // Save formData to a file
    fs.appendFile('rsvp.json', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Server Error');
        } else {
            res.status(200).send('RSVP received');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
