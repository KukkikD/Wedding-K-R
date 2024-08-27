const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002; // or any other available port

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
