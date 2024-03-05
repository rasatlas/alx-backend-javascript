import createEmployeeObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employee = {
  ...createEmployeeObject('engineering', ['Bob', 'Jane']),
  ...createEmployeeObject('marketing', ['Sylvie']),
};

const report = createReportObject(employee);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
