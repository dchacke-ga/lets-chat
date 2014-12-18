'use strict';

app.controller('RoomsCtrl', function($scope, $location, $routeParams, Auth, Room, user) {
	if (!user) {
		$location.path('/sessions/new');
	}

	// index
	$scope.rooms = Room.all;

	// show
	if ($routeParams.id) {
		$scope.room = Room.get($routeParams.id);

		$scope.sendMessage = function() {
			console.log('Add logic to send message here...');
		};
	}

	// new
	$scope.create = function() {
		Room.create($scope.room).then(function(room) {
			$location.path('/rooms/' + room.key());
		}).catch(function(error) {
			$scope.error = error.toString();
		});
	};
});
