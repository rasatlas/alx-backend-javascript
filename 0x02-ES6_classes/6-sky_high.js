import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter and setter
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  // method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
