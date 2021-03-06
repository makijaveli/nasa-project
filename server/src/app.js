const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
const morgan = require("morgan");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Logging with Morgan
app.use(morgan('combined'));

app.use(express.json());

// Configure router with path
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;