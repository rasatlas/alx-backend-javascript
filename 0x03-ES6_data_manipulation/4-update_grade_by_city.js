function updateStudentGradeByCity(students, city, newGrades) {
  const arr = students.filter((item) => item.location === city);
  arr.map((element) => {
    newGrades.filter((iter) => {
      if (iter.studentId === element.id) {
        element.grade = iter.grade;
      } else {
        element.grade = 'N/A';
      }
    });
  });
  return arr;
}
export default updateStudentGradeByCity;
