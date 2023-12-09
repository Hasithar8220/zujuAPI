"use strict";
const NodeCache = require('node-cache');
const MySQLService = require('./db/MySQLService.js');
const GeneralService = require('./utility/General.js');
const MailService = require('./MailService.js');

class FixturesService {
    /**
     * @param {MySQLService} mySQLService
     * @param {GeneralService} generalService
     * @param {MailService} mailService
     * @param {Object} config
     */
    constructor(mySQLService, generalService, mailService, config) {
        this.DB = mySQLService;
        this.GENERAL = generalService;
        this.MAIL = mailService;
        this.CONFIG = config;
    }

    // getFixtures method to handle pagination
    async getFixtures(page) {
        try {
            const pageSize = 10; // Adjust the page size as needed
            const offset = (page - 1) * pageSize;

            // Assuming MySQLService has a method for paginated queries
            const query = `SELECT * FROM Fixture LIMIT ${pageSize} OFFSET ${offset}`;
            const fixtures = await this.DB.runquery(query);

            return fixtures;
        } catch (error) {
            console.error('Error fetching fixtures:', error);
            throw error;
        }
    }

// getDistinctMatchDates method in FixturesService.js to get 
async getDistinctMatchDates() {

    try {
        
        const query = 'SELECT DISTINCT match_date FROM Fixture';
        const matchDates = await this.DB.runquery(query);

        return matchDates;
    } catch (error) {
        console.error('Error fetching distinct match dates:', error);
        throw error;
    }
}


}

module.exports = FixturesService;
