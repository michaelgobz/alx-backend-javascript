export default function getStudentIdsSum (data) {
  return data.reduce((pervious, current) => pervious + current.id ,0);
}
