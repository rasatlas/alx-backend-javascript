// Define interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Snow",
  age: 18,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Snow",
  age: 20,
  location: "Tokyo",
};

// Create an array named studentList
const StudentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  StudentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});
