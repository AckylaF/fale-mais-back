const request = require('supertest');
const app = require('../../src/app.js');

describe("Fee calculation", () => {
  it('should return a JSON', async () => {
    const res = await request(app)
      .post('/fee')
      .send({
        duration: 20,
        originCode: "011",
        destinationCode: "016",
        planFranchise: 30
      })

    console.log(res.body);
    expect(res.status).toBe(200);
  })
})
