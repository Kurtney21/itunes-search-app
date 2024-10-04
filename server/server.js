const express = require('express'); // Importing Express framework
const axios = require('axios'); // Importing Axios for making HTTP requests
const cors = require('cors'); // Importing CORS middleware for handling cross-origin requests
const jwt = require('jsonwebtoken'); // Importing JSON Web Token for authentication
const path = require('path'); // Importing path module for file path handling
const app = express(); // Creating an instance of the Express application
const PORT = process.env.PORT || 5000; // Setting the port for the server

app.use(cors()); // Using CORS middleware
app.use(express.json()); // Middleware for parsing JSON bodies

/**
 * Middleware to verify JWT
 * 
 * This middleware checks for a valid JWT token in the request headers.
 * If the token is valid, it allows the request to proceed; otherwise,
 * it sends a 403 Forbidden response.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 */
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Extract the token from headers
  if (!token) return res.sendStatus(403); // Send 403 if no token is found
  jwt.verify(token, 'your_secret_key', (err) => { // Verify the token
    if (err) return res.sendStatus(403); // Send 403 if token is invalid
    next(); // Proceed to the next middleware if token is valid
  });
};

/**
 * Search Endpoint
 * 
 * Handles GET requests to the /search endpoint. It fetches media data
 * from the iTunes API based on the search term and media type provided
 * as query parameters.
 * 
 * @param {Object} req - The request object containing query parameters.
 * @param {Object} res - The response object used to send the results.
 */
app.get('/search', async (req, res) => {
  const { term, media } = req.query; // Extract term and media from query parameters
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${term}&media=${media}` // Fetch data from iTunes API
    );
    const results = response.data.results.map(item => ({
      albumName: item.collectionName, // Album name from response
      artistName: item.artistName, // Artist name from response
      albumCover: item.artworkUrl100, // Album cover image URL
      releaseDate: item.releaseDate, // Release date (if available)
      id: item.collectionId // Unique identifier for each item
    }));
    res.json(results); // Send results as JSON response
  } catch (error) {
    res.status(500).send('Error fetching data from iTunes API'); // Send error message on failure
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Log the server status
