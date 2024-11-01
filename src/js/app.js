'use strict';

import { Student } from './student.js';
import { present } from './present.js';
import { absent } from './absent.js';
import { mark } from './mark.js';
import { summary } from './summary.js';

const student1 = new Student('Владислав', 'Никишин', 1996);
const student2 = new Student('Владимир', 'Шайтан', 1996);

present(student1);
absent(student1);
mark(student1, 7);
mark(student1, 10);

console.log(`Середняя оценка студента ${student1.firstName} ${student1.lastName}: ${student1.getAverageGrade()}`);
console.log(`Середняя посещаемость студента ${student1.firstName} ${student1.lastName}: ${student1.getAverageAttendance()}`);
console.log(summary(student1));

present(student2);
mark(student2, 10);
mark(student2, 9);

console.log(`Середняя оценка студента ${student2.firstName} ${student2.lastName}: ${student2.getAverageGrade()}`);
console.log(`Середняя посещаемость студента ${student2.firstName} ${student2.lastName}: ${student2.getAverageAttendance()}`);
console.log(summary(student2));

function displayStudentInfo(student) {
  const studentContainer = document.createElement('div');

  const nameElement = document.createElement('h2');
  nameElement.textContent = `Студент: ${student.firstName} ${student.lastName}`;

  const ageElement = document.createElement('p');
  ageElement.textContent = `Возраст: ${student.getAge()}`;

  const gradeElement = document.createElement('p');
  gradeElement.textContent = `Средняя оценка: ${student.getAverageGrade().toFixed(2)}`;

  const attendanceElement = document.createElement('p');
  attendanceElement.textContent = `Средняя посещаемость: ${(student.getAverageAttendance() * 100).toFixed(2)}%`;

  const summaryElement = document.createElement('p');
  summaryElement.textContent = `Сводка: ${summary(student)}`;

  studentContainer.appendChild(nameElement);
  studentContainer.appendChild(ageElement);
  studentContainer.appendChild(gradeElement);
  studentContainer.appendChild(attendanceElement);
  studentContainer.appendChild(summaryElement);

  document.body.appendChild(studentContainer);
}

displayStudentInfo(student1);
displayStudentInfo(student2);
