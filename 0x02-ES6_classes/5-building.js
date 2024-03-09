/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/**
 * Abstract Class Building.
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
