const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config.json');
require('dotenv').config();


// Services
const FixturesService = require('./services/FixturesService.js');
const MySQLService = require('./services/db/MySQLService.js'); 

const app = express();

// ... (other middleware setup goes here)

// Instantiate services with dependencies
const mySQLService = new MySQLService();
const fixturesService = new FixturesService(mySQLService, null, null, config);

// Endpoint to get fixtures with pagination
app.get('/fixtures', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const fixtures = await fixturesService.getFixtures(page);
        res.json(fixtures);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Endpoint to get distinct match dates
app.get('/fixtures/calendar', async (req, res) => {
    try {
        const matchDates = await fixturesService.getDistinctMatchDates();
        res.json(matchDates);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start a server. PORT is reading from .env file
app.listen(process.env.PORT, function () {
console.log("Express server listening...", process.env.PORT, process.env.NODE_ENV);
});