const Call = require("../../src/App/call");

describe("Call", () => {
  const mockData = {
    duration: expect.anything(),
    originCode: expect.anything(),
    destinationCode: expect.anything(),
    phonePlan: expect.anything(),
  };

  it("should have properties duration, originCode, destinationCode, phonePlan", () => {
    expect(new Call(20, "011", "016", {})).toEqual(mockData);
  });
});
