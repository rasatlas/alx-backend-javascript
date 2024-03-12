function groceriesList() {
  const myMap = new Map();
  return myMap
    .set('Apples', 10)
    .set('Tomatoes', 10)
    .set('Pasta', 1)
    .set('Rice', 1)
    .set('Banana', 5);
}

export default groceriesList;
