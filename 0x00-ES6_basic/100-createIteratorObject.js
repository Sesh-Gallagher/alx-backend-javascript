export default function createIteratorObject(report) {
  const employee = [];
  for (const idx of Object.values(report.allEmployees)) {
    employee.push(...idx);
  }

  return employee;
}
