export default function updateStudentGradeByCity(data, city, grade) {
  return data.filter((item) => item.location === city).
    map((item) => {
      let stgrade = grade.filter((grade) => item.id === grade.studentId)
      let grad = stgrade.length > 0 ? stgrade[0].grade : "Error"
      return [...data, grad ]
    })   
}
