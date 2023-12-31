// Task Description: Student Management System

// You are tasked with creating a Student Management System in JavaScript. T
//his system should allow you to add and manage student records. The code should be organized into different modules for better code structure.

// Requirements:

// Student Class (student.js): Create a Student class with the following attributes and methods:

// Attributes: name, id, and an array courses to store a list of courses that the student is enrolled in.
// Methods:
// constructor(name, id): Initializes the student's name, ID, and an empty courses array.
// enroll(course): Accepts a course name (string) and enrolls the student in that course by adding it to the courses array.
// getInfo(): Returns a string with the student's name, ID, and the list of enrolled courses.
// Student Manager (studentManager.js): Create a StudentManager module that manages student records using closures.
//This module should have the following functions:

// addStudent(name, id): Create a new student instance and add it to the list of students.
// enrollStudent(id, course): Find the student by ID and enroll them in a course.
// getStudentInfo(id): Find the student by ID and return their information.
// getAllStudentsInfo(): Return an array of strings with the information of all students.
// Main Application (main.js): Import the StudentManager module and use it to:

// Add at least three students.
// Enroll some of the students in different courses.
// Retrieve and display the information of individual students.
// Display the information of all students.
// Remember to use module import/export to separate the code into different files.
//The Student class should be used to create and manage student records, and the StudentManager should handle student management operations.