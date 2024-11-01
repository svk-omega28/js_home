'use strict';

export function present(student) {
  const index = student.attendance.indexOf(null);
  if (index !== -1) {
    student.attendance[index] = true;
  } else {
    console.log('Attendance array is full.');
  }
}
