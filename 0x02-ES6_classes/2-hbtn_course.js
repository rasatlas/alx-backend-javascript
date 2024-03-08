/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      console.error('TypeError: Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      console.error('TypeError: Length must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    }
  }

  get name() {
    return this._name;
  }

  get lengthHBC() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
