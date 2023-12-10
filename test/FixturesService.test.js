const chai = require('chai');
const { describe, it } = require('mocha');

const MySQLService = require('../services/db/MySQLService.js'); 
const FixturesService = require('../services/FixturesService');
const config = require('../config.json');

const expect = chai.expect;

describe('FixturesService', () => {
  it('should return fixtures', async () => {
    
    
    const mySQLService = new MySQLService();
    const fixturesService = new FixturesService(mySQLService, null, config);
    const page = 1;
    const fixtures = await fixturesService.getFixtures(page);

    expect(fixtures).to.be.an('array');
    // more asserts
  });

  // more tests
});
