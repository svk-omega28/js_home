'use strict';

export function summary(student) {
  const avgGrade = student.getAverageGrade();
  const avgAttendance = student.getAverageAttendance();

  if (avgGrade > 9 && avgAttendance > 0.9) {
    return 'Ух ти, який молодчинка!';
  } if (avgGrade > 9 || avgAttendance > 0.9) {
    return 'Нормально, але можна краще';
  }
  return 'Редька!';
}
