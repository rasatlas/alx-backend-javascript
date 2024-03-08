/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  static displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
