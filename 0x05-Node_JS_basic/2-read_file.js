/**
 * Function counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

const fs = require('fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentgroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentgroups).includes(field)) {
      studentgroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentgroups[field].push(Object.fromEntries(studentEntries));
  }

  const total_students = Object
    .values(studentgroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${total_students}`);
  for (const [field, group] of Object.entries(studentgroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
