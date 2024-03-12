function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  let value = '';
  for (const element of set) {
    if (element && element.startsWith(startString)) {
      value += value.length === 0 ? element.replace(startString, '') : element.replace(startString, '-');
    }
  }
  return value;
}

export default cleanSet;
