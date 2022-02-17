// ES5
'use strict';

/**
 * Person class.
 *
 * @constructor
 * @param {String} name - name of a person.
 * @param {Number} age  - age of a person.
 * @param {String} gender  - gender of a person.
 */

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

/**
 * Teacher class.
 *
 * @constructor
 * @param {String} name - name of a teacher.
 * @param {Number} age  - age of a teacher.
 * @param {String} gender  - gender of a teacher.
 * @param {String} subject - subject of a teacher.
 */

function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getSubject = function() {
  return this.subject;
};

/**
 * Student class.
 *
 * @constructor
 * @param {String} name - name of a student.
 * @param {Number} age  - age of a student.
 * @param {String} gender  - gender of a student.
 * @param {Number} marks - marks of a student.
 */

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


// ES6
'use strict';

/**
 * Person class.
 *
 * @constructor
 * @param {String} name - name of a person.
 * @param {Number} age  - age of a person.
 * @param {String} gender  - gender of a person.
 */

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }
}

/**
 * Teacher class.
 *
 * @constructor
 * @param {String} name - name of a teacher.
 * @param {Number} age  - age of a teacher.
 * @param {String} gender  - gender of a teacher.
 * @param {String} subject - subject of a teacher.
 */

class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);

    this.subject = subject;
  }

  getSubject() {
    return this.subject;
  }
}

/**
 * Student class.
 *
 * @constructor
 * @param {String} name - name of a student.
 * @param {Number} age  - age of a student.
 * @param {String} gender  - gender of a student.
 * @param {Number} marks - marks of a student.
 */

class Student extends Person {
  constructor(name, age, gender, marks) {
    super(name, age, gender);
    this.marks = marks;
  }

  getMarks() {
    return this.marks;
  }
}

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