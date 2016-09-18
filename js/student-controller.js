'use strict';

angular.module('student.controller', [])

.controller('studentController', function($scope, studentService) {

	$scope.getStudentList = function() {
		return Object.create(studentService.getStudentList());
	}

	$scope.studentList = $scope.getStudentList();

	$scope.addStudent = function(student) {
		console.log('[studentController.add: name]=' + student.name);

		$scope.studentList.push(angular.copy(student));
	};

	$scope.reset = function() {
		console.log('[studentController.reset]');

		$scope.studentList = $scope.getStudentList();
	};

});