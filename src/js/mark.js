'use strict';

export function mark(student, score) {
  if (score < 0 || score > 10) {
    console.error('Score must be between 0 and 10.');
    return;
  }
  const index = student.grades.indexOf(null);
  if (index !== -1) {
    student.grades[index] = score;
  } else {
    console.log('Grades array is full.');
  }
}
