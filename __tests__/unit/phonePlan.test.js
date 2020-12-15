const PhonePlan = require('../../src/App/phonePlan');

describe('Phone plan', () => {
  it('should have property franchise', () => {
    expect(new PhonePlan()).toHaveProperty('franchise');
  })
})
