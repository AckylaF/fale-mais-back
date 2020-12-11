import fees from './fees.js';

class CalculateFee {
  constructor(call) {
    this.call = call;
  }

  valueWithoutPhonePlan() {
    return this.call.duration * fees[this.call.originDDD][this.call.destinationDDD];
  }

  valueWithPhonePlan() {
    if(this.call.duration <= this.call.phonePlan.franchise) 
      return 0;

    const exceedingTime = this.call.duration - this.call.phonePlan.franchise;

    return exceedingTime * (fees[this.call.originDDD][this.call.destinationDDD] * 1.1);

  }
}

export default CalculateFee;