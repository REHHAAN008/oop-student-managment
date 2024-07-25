var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = _super.call(this, name, age) || this;
        _this.id = id;
        _this.courses = [];
        return _this;
    }
    Student.prototype.registerForCourse = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.courses = [];
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.setInstructor = function (instructor) {
        this.instructor = instructor;
    };
    return Course;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.courses = [];
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var student1 = new Student('Sehar', 18, 12745);
var student2 = new Student('nibb', 21, 12348);
var instructor1 = new Instructor('hamzah', 30, 40000);
var instructor2 = new Instructor('AMEEN ALAM', 35, 45000);
var course1 = new Course(1, 'Introduction to Computer Science');
var course2 = new Course(2, 'Advanced Programming');
var department1 = new Department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName()); // Output: sehar
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]
