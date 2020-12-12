const fees = require('./fees');

class CalculateFee {
  constructor(call) {
    this.call = call;
  }

  valueWithoutPhonePlan() {
    return this.call.duration * fees[this.call.originCode][this.call.destinationCode];
  }

  valueWithPhonePlan() {
    if(this.call.duration <= this.call.phonePlan.franchise) 
      return 0;

    const exceedingTime = this.call.duration - this.call.phonePlan.franchise;

    return exceedingTime * (fees[this.call.originCode][this.call.destinationCode] * 1.1);

  }
}

module.exports = CalculateFee;