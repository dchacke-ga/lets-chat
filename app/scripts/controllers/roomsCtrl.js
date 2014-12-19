'use strict';

app.controller('RoomsCtrl', function($scope, $location, $routeParams, Auth, Room, Message, user) {
	if (!user) {
		$location.path('/sessions/new');
	}

	// #index
	$scope.rooms = Room.all;

	// #show
	if ($routeParams.id) {
		var id = $routeParams.id;
		$scope.room = Room.get(id);
		$scope.messages = Message.all(id);
		$scope.url = $location.absUrl();

		$scope.sendMessage = function() {
			console.log('Sending message');
			$scope.message.sender = Auth.user.profile.username;
			Message.create(id, $scope.message);
			$scope.message.body = '';
		};
	}

	// #create
	$scope.create = function() {
		Room.create($scope.room).then(function(room) {
			$location.path('/rooms/' + room.key());
		}).catch(function(error) {
			$scope.error = error.toString();
		});
	};
});
