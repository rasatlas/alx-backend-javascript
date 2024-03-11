// A function that returns an array of objects who are located in
// a specific city.

function getStudentsByLocation(students, city) {
  return students.filter((item) => item.location.toLowerCase() === city.toLowerCase());
}

export default getStudentsByLocation;
