const request = require('supertest');
const app = require('../../src/app.js');

describe("Fee calculation", () => {
  const mockData = {
    duration: 20,
    originCode: "011",
    destinationCode: "016",
    planFranchise: 30
  }

  it('should return an object with two keys', async () => {
    const res = await request(app)
      .post('/fee')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(mockData)
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('valueWithPhonePlan');
    expect(res.body).toHaveProperty('valueWithoutPhonePlan');
  })

  it('should return values 0 and 38', async () => {
    const res = await request(app)
      .post('/fee')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(mockData)

    expect(res.body.valueWithPhonePlan).toEqual('0.00');
    expect(res.body.valueWithoutPhonePlan).toEqual('38.00');
  })
})
