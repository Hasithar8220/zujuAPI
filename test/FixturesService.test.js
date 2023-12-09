const chai = require('chai');
const { describe, it } = require('mocha');
const FixturesService = require('../services/FixturesService');

const expect = chai.expect;

describe('FixturesService', () => {
  it('should return fixtures', async () => {
    const fixturesService = new FixturesService(/* mock dependencies */);

    const fixtures = await fixturesService.getFixtures(/* provide necessary parameters */);

    expect(fixtures).to.be.an('array');
    // more asserts
  });

  // more tests
});
