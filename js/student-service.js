'use strict';

angular.module('student.service', [])

.service('studentService', function() {

	var studentList = [
		{
			name: 'Bob',
			age: '18',
			gender: 'Male'
		}, 
		{
			name: 'Joe',
			age: '20',
			gender: 'Male'
		}, 
		{
			name: 'Jane',
			age: '18',
			gender: 'Female'
		},
		{
			name: 'June',
			age: '19',
			gender: 'Female'
		}
	];

	this.getStudentList = function() {
		return studentList;
	};
	
});