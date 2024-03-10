/* eslint-disable no-underscore-dangle */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clone = new Car(this.brand, this.color, this.motor);
    return clone;
  }
}

export default EVCar;
