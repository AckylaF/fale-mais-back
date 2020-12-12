class Call {
  constructor(duration, originDDD, destinationDDD, phonePlan) {
    this.duration = duration;
    this.originDDD = originDDD;
    this.destinationDDD = destinationDDD;
    this.phonePlan = phonePlan;
  }
}

module.exports = Call;