import Call from '../call.js';
import CalculateFee from '../calculateFee.js';
import PhonePlan from '../phonePlan.js';

class FeeController {
  calculate(req, res) {
    const { duration, originDDD, destinationDDD, planFranchise } = req.body;
    const plan = new PhonePlan(planFranchise);                                 // KEPT THE USE OF THE "PLAN" OBJECT INSTEAD OF PASSING "FRANCHISE" DIRECTLY TO "CALL" FOR REASONS OF SCALABILITY 
    const call = new Call(duration, originDDD, destinationDDD, plan);
    const fee = new CalculateFee(call);

    return res.json({
      valueWithPhonePlan: fee.valueWithPhonePlan().toFixed(2),
      valueWithoutPhonePlan: fee.valueWithoutPhonePlan().toFixed(2)
    });
  }
}

export default new FeeController;