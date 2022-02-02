const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const {loadPlanetData} = require('./models/planets.model')

// Start server
async function startServer() {
    await loadPlanetData();
    // Start server
    server.listen(PORT, () => {
        console.log("Listening on port " + PORT);
    });
}

startServer();

