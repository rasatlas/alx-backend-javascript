/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/**
 * Abstract Class Building.
 */
export default class Building {
  constructor(sqft) {
    // Any class extending Building must implement evacuationWarningMessage method
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');}
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
