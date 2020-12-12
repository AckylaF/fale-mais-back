const Call = require('../call');
const CalculateFee = require('../calculateFee');
const PhonePlan = require('../phonePlan');

class FeeController {
  calculate(req, res) {
    const { duration, originCode, destinationCode, planFranchise } = req.body;
    const plan = new PhonePlan(planFranchise);                                 // KEPT THE USE OF THE "PLAN" OBJECT INSTEAD OF PASSING "FRANCHISE" DIRECTLY TO "CALL" FOR REASONS OF SCALABILITY 
    const call = new Call(duration, originCode, destinationCode, plan);
    const fee = new CalculateFee(call);

    return res.json({
      valueWithPhonePlan: fee.valueWithPhonePlan().toFixed(2),
      valueWithoutPhonePlan: fee.valueWithoutPhonePlan().toFixed(2)
    });
  }
}

module.exports = new FeeController;