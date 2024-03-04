export default function createEmployeesObject(departmentName, employee) {
  const obj = {
    [departmentName]: employee,
  };

  return obj;
}
