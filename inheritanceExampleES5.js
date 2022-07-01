// ES5
'use strict';

// Person class.
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.getAge = function() {
  return this.age;
};

Person.prototype.getGender = function() {
  return this.gender;
};

// Teacher class
function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);
  this.subject = subject;
}


// After this 'teacher instance of Person' will return true, BUT:
Teacher.prototype = Object.create(Person.prototype);
// teacher.constructor will return 'Person', which is wrong.
// The reason of that is that line: 'Teacher.prototype = Object.create(Person.prototype)',
// where we essentially reset Teacher.prototype.
// And it no longer have it's own constructor because it delegates to Person.prototype

// It should point to Teacher instead.
// That's why we need to set it's constructor explicitly:
Teacher.prototype.constructor = Teacher;
//  Great explanation: https://www.youtube.com/watch?v=MiKdRJc4ooE


Teacher.prototype.getSubject = function() {
  return this.subject;
};

// Student class
function Student(name, age, gender, marks) {
  Person.call(this, name, age, gender);
  this.marks = marks;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getMarks = function() {
  return this.marks;
};

const teacher = new Teacher('John Doe', 30, 'male', 'Maths');
const student = new Student('Jane Miles', 12, 'female', 88);

console.log(
  'Teacher:',
  teacher.getName(),
  teacher.getAge(),
  teacher.getGender(),
  teacher.getSubject(),
);
console.log(
  'Student:',
  student.getName(),
  student.getAge(),
  student.getGender(),
  student.getMarks(),
);
// ===================================
