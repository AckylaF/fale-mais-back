const CalculateFee = require('../../src/App/calculateFee');

describe('Calulate Fee', () => {
  it('should have property call', () => {
    expect(new CalculateFee()).toHaveProperty('call');
  })
})