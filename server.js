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

 //Handling CORS for API
 var corsOptions = {
    optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

//Incoming filesize limit
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// ... (other middleware setup goes here)

// Instantiate services with dependencies
const mySQLService = new MySQLService();
const fixturesService = new FixturesService(mySQLService, null, config);

// Endpoint to get fixtures with pagination
// In ideal world endpoint needs to go through token verification middleware method
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
// In ideal world endpoint needs to go through token verification middleware method
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