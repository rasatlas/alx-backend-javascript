import createIteratorObject from './100-createIteratorObject';
import createEmployeeObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeeObject('engineering', ['Bob', 'Jane']),
  ...createEmployeeObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
