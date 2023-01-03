export default function getStudentsByLocation(data, city) {
  return data.filter((item) => item.location === city);
}
