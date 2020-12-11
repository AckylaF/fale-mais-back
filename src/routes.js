import { Router } from 'express';
const routes = Router();

import Call from './App/call.js';
import CalculateFee from './App/calculateFee.js';
import PhonePlan from './App/phonePlan.js';

routes.post("/fee", (req, res) => {
  const { duration, originDDD, destinationDDD, planFranchise } = req.body;
  const plan = new PhonePlan(planFranchise);                                 // KEPT THE USE OF THE "PLAN" OBJECT INSTEAD OF PASSING "FRANCHISE" DIRECTLY TO "CALL" FOR REASONS OF SCALABILITY 
  const call = new Call(duration, originDDD, destinationDDD, plan);
  const fee = new CalculateFee(call);

  const simulation = {
    valueWithPhonePlan: fee.valueWithPhonePlan().toFixed(2),
    valueWithoutPhonePlan: fee.valueWithoutPhonePlan().toFixed(2)
  }

  return res.json(simulation);
})

export default routes;