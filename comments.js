// Create web server 
// using Express.js and set up a basic route for comments


const express = require('express');     

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for getting comments
app.get('/comments', (req, res) => {
    res.json({ message: 'Get all comments' });
});

// Route for posting a comment
app.post('/comments', (req, res) => {
    res.json({ message: 'Comment created' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



