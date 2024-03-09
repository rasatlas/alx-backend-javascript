/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/**
 * Abstract Class Building.
 *
 * @class Building
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get area() {
    return this._sqft;
  }

  set area(area) {
    this._sqft = area;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
