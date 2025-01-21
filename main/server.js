// Import the required libraries
const express = require('express');
const corsAnywhere = require('cors-anywhere');

// Create an Express application
const app = express();

// Create the CORS Anywhere proxy server
const proxy = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [], // No specific headers are required
    removeHeaders: ['cookie', 'cookie2'], // Remove sensitive headers
});

app.get('/search', (req, res) => {
    const query = req.query.query; // Get the query parameter
    // Handle the search logic here
    res.json({ message: `Searching for ${query}` }); // Example response
  });

// Enable the proxy on the /proxy endpoint
app.all('/proxy/*', (req, res) => {
    req.url = req.url.replace(/^\/proxy/, ''); // Adjust URL path for API requests
    proxy.emit('request', req, res); // Proxy the request
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`CORS Anywhere proxy running on http://localhost:${PORT}`);
});


// In the server.js file
const corsAnywhere = require('cors-anywhere');

// Create a CORS server with extra headers
const server = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins, or you can specify your domains
    setHeaders: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Running CORS Anywhere on 0.0.0.0:8080');
});
