// A funtion that returns an array of ids from a list of objects.
function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}

export default getListStudentIds;
