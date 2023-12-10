"use strict";


class FixturesService {
    /**
     * @param {MySQLService} mySQLService
     * @param {GeneralService} generalService
     * @param {Object} config
     */

    constructor(mySQLService, generalService, config) {
        this.DB = mySQLService;
        this.GENERAL = generalService;
        this.CONFIG = config;
    }


    /**
 * Retrieves a paginated list of fixtures.
 *
 * @param {number} page - The page number to retrieve.
 * @returns {Promise<Array>} - An array of fixtures for the specified page.
 * @throws {Error} - Throws an error if there's an issue fetching fixtures.
 */
async getFixtures(page) {
    try {
        const pageSize = this.CONFIG.pageSize; // Adjust the page size as needed in config.json
        const offset = (page - 1) * pageSize;

        const query = `SELECT * FROM Fixture LIMIT ${pageSize} OFFSET ${offset}`;
        const fixtures = await this.DB.runquery(query);

        return fixtures;
    } catch (error) {
        console.error('Error fetching fixtures:', error);
        throw error;
    }
}

/**
 * Retrieves distinct match dates from fixtures.
 *
 * @returns {Promise<Array>} - An array of distinct match dates.
 * @throws {Error} - Throws an error if there's an issue fetching match dates.
 */
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
