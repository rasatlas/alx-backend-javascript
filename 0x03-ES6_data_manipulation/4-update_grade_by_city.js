function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

export default updateStudentGradeByCity;
/* function updateStudentGradeByCity(students, city, newGrades) {
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
*/
