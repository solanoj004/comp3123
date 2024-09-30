const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:3000/
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS</h1>');
});

// GET method using Query Parameters
app.get('/user', (req, res) => {
    const firstName = req.query.firstname || 'Pritesh';
    const lastName = req.query.lastname || 'Patel';
    res.json({ firstname: firstName, lastname: lastName });
});

// POST method using Path Parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})
