angular.module('student.controller', [])

.controller('studentController', function($scope, studentService) {

	$scope.studentList = studentService.getStudentList();
})

//.controller('AccountDetail', function($scope))

;