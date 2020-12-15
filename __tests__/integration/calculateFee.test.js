const CalculateFee = require('../../src/App/calculateFee');
const Call = require('../../src/App/call');

describe('Fee calculation', () => {
  it('should return 0 and 38', () => {
    const call = new Call(20, "011", "016", { franchise: 30 })
    const fee = new CalculateFee(call)
    
    expect(fee.valueWithPhonePlan()).toEqual(0);
    expect(fee.valueWithoutPhonePlan()).toEqual(38);
  })

  it('should return 37,40 and 136', () => {
    const call = new Call(80, "011", "017", { franchise: 60 })
    const fee = new CalculateFee(call)
    
    expect(fee.valueWithPhonePlan()).toBeCloseTo(37.40);
    expect(fee.valueWithoutPhonePlan()).toEqual(136);
  })
})