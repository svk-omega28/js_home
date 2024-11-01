'use strict';

export function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.attendance = Array(10).fill(null);
  this.grades = Array(10).fill(null);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    const validGrades = this.grades.filter((grade) => grade !== null);
    if (validGrades.length === 0) return 0;
    return validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
  };

  this.getAverageAttendance = function () {
    const validAttendance = this.attendance.filter((att) => att !== null);
    if (validAttendance.length === 0) return 0;
    const attended = validAttendance.filter((att) => att === true).length;
    return attended / validAttendance.length;
  };
}
