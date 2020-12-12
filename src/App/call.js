class Call {
  constructor(duration, originCode, destinationCode, phonePlan) {
    this.duration = duration;
    this.originCode = originCode;
    this.destinationCode = destinationCode;
    this.phonePlan = phonePlan;
  }
}

module.exports = Call;