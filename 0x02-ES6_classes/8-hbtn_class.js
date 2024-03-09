class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    valueOf() {
        // Called when the object is used in a numeric context
        return Number(this._size);
      }
    
      toString() {
        // Called when the object is used in a string context
        return String(this._location);
      }
}

export default HolbertonClass;
