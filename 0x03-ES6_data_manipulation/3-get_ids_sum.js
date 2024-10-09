export default function getStudentIdsSum(student = getListStudents()) {
  return student.reduce((current, next) => current + next.id, 0);
}
