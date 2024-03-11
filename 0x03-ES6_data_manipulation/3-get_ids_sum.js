// Function that returns the sum of all the student ids.
function getStudentIdsSum(students) {
  return students.reduce((sum, item) => sum + item.id, 0);
}

export default getStudentIdsSum;
