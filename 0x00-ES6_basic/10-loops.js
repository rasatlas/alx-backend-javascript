export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arrayCopy = [];
  for (const idx of array) {
    const value = idx;
    arrayCopy[i] = appendString + value;
    i += 1;
  }

  return arrayCopy;
}
