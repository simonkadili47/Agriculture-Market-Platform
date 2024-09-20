const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Use the exact origin of your frontend
    credentials: true, // Allows cookies to be sent with the request
}));

app.use(express.json());

// Route for logout
app.post('/api/logout', (req, res) => {
    // Assuming you are using sessions, destroy the session
    // If using JWT, just remove the token from the client side
    res.clearCookie('your-cookie-name'); // Replace 'your-cookie-name' with your actual cookie name
    res.json({ message: 'Logged out successfully' });
});

const port = 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));
