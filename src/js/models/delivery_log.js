class DeliveryLog {
  constructor(rawlog) {
    this.json = rawlog //JSON.parse(rawlog)
  }

  validate() {
    return true
  }

  toJson() {
    return JSON.stringify(this.json)
  }
}

export default DeliveryLog
