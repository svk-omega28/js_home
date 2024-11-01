'use strict';

export function absent(student) {
  const index = student.attendance.indexOf(null);
  if (index !== -1) {
    student.attendance[index] = false;
  } else {
    console.log('Attendance array is full.');
  }
}
