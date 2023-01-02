
function getListStudentIds(data) {
  if (!Array.isArray(data)) return [];

  return students.map((data) => data.id);
}

export default getListStudentIds;